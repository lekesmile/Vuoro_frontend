import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    state = {
        email: "",
        password: ""
    }


    formInPutHandler = (e) => {
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (

            <div className="container mt-8 d-flex justify-content-center">
                <div className="row">
                <div className="jumbotron lg-jumb2">
                    <h1 className="homeh1">Our <span className="homespan">automated</span> shift App</h1>
                    <p className="mt-5 homep">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not
                     only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="jumbotron lg-jumb">
                    <form>
                        <h1 className="mb-3"><span className="homelogin">Login</span></h1>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input name="email" onChange={this.formInPutHandler} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input name="password" onChange={this.formInPutHandler} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button onClick={this.submitHandler} type="submit" className="btn btn-primary ">Submit</button>

                            <Link className="nav-link loginSignup" to="/signup"> Sign Up</Link>
                    </form>
                </div>
                </div>
            </div>

        )
    }
}
export default Login