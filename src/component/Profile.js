import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <h3>Hello {this.props.name}</h3>
            </div>
        )
    }
}
