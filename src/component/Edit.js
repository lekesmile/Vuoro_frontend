import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {


    state = {
        firstname: '',
        lastname: '',
        email: '',
        department: '',
        salary: '',

    }

    onChangeTodoHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

//Fetch the worker from database

    componentDidMount() {
        axios.get("http://localhost:5000/api/workers/" + this.props.match.params.id)
            .then(response => {
                console.log(this.state)
                this.setState({
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    department: response.data.department,
                    salary: response.data.salary
                })
            })
            .catch(error => console.log(`Error fetch API ${error}`))

    }

    // Save the updated data into the database

    onSubmit = (e) => {
        e.preventDefault();
        const updatedTodo = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            department: this.state.department,
            salary: this.state.salary
        }

        axios.put("http://localhost:5000/api/workers/" + this.props.match.params.id, updatedTodo)

            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        this.props.history.push('/partner')
    }

    // Delete handler

    deleteHandler = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:5000/api/workers/" + this.props.match.params.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))

        this.props.history.push('/partner')
    }


    render() {
        return (
            <div>
                <h3>Edit worker</h3>
                <form onSubmit={this.onSubmit}>
                    <table className="table table-hover mt-5">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Department</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>


                            <tr>
                                <th scope="row"></th>
                                <td ><input value={this.state.firstname} name="firstname" onChange={this.onChangeTodoHandler} /> </td>
                                <td ><input value={this.state.lastname} name="lastname" onChange={this.onChangeTodoHandler} /></td>
                                <td ><input value={this.state.email} name="email" onChange={this.onChangeTodoHandler} /></td>
                                <td ><input value={this.state.department} name="department" onChange={this.onChangeTodoHandler} /></td>
                                <td ><input value={this.state.salary} name="salary" onChange={this.onChangeTodoHandler} /></td>
                                <td>
                                    <button className="btn btn-outline-info mx-1">Save</button>
                                    <button onClick={this.deleteHandler}className="btn btn-outline-danger ">Delete</button>
                                   
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
