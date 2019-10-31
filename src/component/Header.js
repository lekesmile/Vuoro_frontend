
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';




export default class Header extends Component {

    state = {
        redirectToReferrer: false,
    }

    logout = () => {
       
        localStorage.setItem('usertoken', '');
        localStorage.clear();
        this.setState({ redirectToReferrer: true });
    }

    // getToken = () => {
    //     // Retrieves the user token from localStorage
    //     localStorage.getItem('usertoken')
    // }


    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/'} />)
        }

        return (

            <nav className="  navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link className="navbar-brand text-danger" to="/">WE CARE </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 float-left ">
                        {/* <li className="nav-item active">
                        <Link className="nav-link" to="/product">Product <span className="sr-only">(current)</span></Link>
                    </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/partner">Partner </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/livedemo">Livedemo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Price</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile"> Profile</Link>
                        </li>
                         
                         {/* <h3>Welcome,  {this.getToken}</h3> */}
                        <button className="btn btn-info btn-sm float-right" type="button" onClick={this.logout}>Logout</button>

                    </ul>
                </div>


            </nav>

        )
    }
}
