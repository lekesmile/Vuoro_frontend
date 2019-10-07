import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
    state = {
        firstname: "",
        lastname: "",
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
        const newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,

        }
        axios.post("http://localhost:5000/signup", newUser)
            .then(response => {
                // return <Redirect to={"/product"} />
                console.log('user added' + response.data)

            })
            .catch(err => console.log(err.response.data));

    }



    render() {
        return (

            <div className="container mt-8 d-flex justify-content-center">
                {/* <div className="row"> */}
                <div className="jumbotron">
                    <form onSubmit={this.submitHandler}>
                        <h1 className="mb-3"><span className="homelogin">Signup</span></h1>
                        <div className="form-group">
                            <label htmlFor="firstname">Firstname</label>
                            <input name="firstname" onChange={this.formInPutHandler} type="text" className="form-control" id="exampleInputfirstname" placeholder="Firstname" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Lastname</label>
                            <input name="lastname" onChange={this.formInPutHandler} type="text" className="form-control" id="exampleInputlastname" placeholder="Lastname" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input name="email" onChange={this.formInPutHandler} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input name="password" onChange={this.formInPutHandler} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary ">Submit</button>
                    </form>
                </div>
            </div>
            // </div>

        )
    }
}
export default Signup