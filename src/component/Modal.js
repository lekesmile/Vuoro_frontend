import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';


export default class Modal extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        department: '',
        salary: '',
        redirectToReferrer: false,


    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }


    onSubmit = (e) => {
        e.preventDefault();

        const obj = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            department: this.state.department,
            salary: this.state.salary
        }

        axios.post("http://localhost:5000/api/workers", obj)
            .then(res => console.log(res.data))

        this.setState({ redirectToReferrer: true });
    }




    render() {
        // redirect after adding new worker
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/partner'} />)
        }
        return (
            <div>
                {/* <!-- Button trigger modal --> */}
                <div className="container">
                <button type="button" className="btn btn-primary btn-sm my-3 float-right" data-toggle="modal" data-target="#exampleModal">
                    Add a Partner
                </button>
                </div>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Partner</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">

                                        <input name="firstname"
                                            type="text"
                                            className="form-control my-1"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="firstname"
                                            onChange={this.onChangeHandler}
                                        />
                                        <input name="lastname"
                                            type="text"
                                            className="form-control my-1"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="lastname"
                                            onChange={this.onChangeHandler}
                                        />
                                        <input name="email"
                                            type="text"
                                            className="form-control my-1"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="email"
                                            onChange={this.onChangeHandler}
                                        />
                                        <input name="department"
                                            type="text"
                                            className="form-control my-1"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="department"
                                            onChange={this.onChangeHandler}
                                        />
                                        <input name="salary"
                                            type="text"
                                            className="form-control my-1"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="salary"
                                            onChange={this.onChangeHandler}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary btn-block">Add</button>
                                </form>
                                    {/* <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="submit" className="btn btn-primary" >Add</button>
                                    </div> */}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
