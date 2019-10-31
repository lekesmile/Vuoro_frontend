import React, { Component } from "react";


export default function withAuth(ComponentToBeRendered) {
    class Authenticate extends Component {
        componentWillMount() {
            if (this.props.isAuthenticated === false) {
                this.props.history.push("/");
            }
        }
        componentWillUpdate(nextProps) {
            if (nextProps.isAuthenticated === false) {
                this.props.history.push("/");
            }
        }
        render() {
            return <ComponentToBeRendered {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { isAuthenticated: state.currentUser.isAuthenticated };
    }

    return;

}