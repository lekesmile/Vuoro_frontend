import React, { Component } from 'react'
import axios from 'axios'


export default class Delete extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        department: '',
        salary: '',

    }

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
                <h3 className="mt-3">Delete worker</h3>
                <form onSubmit={this.deleteHandler}>
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
                                <td ><input value={this.state.firstname} name="firstname"  disabled /> </td>
                                <td ><input value={this.state.lastname} name="lastname"  disabled/></td>
                                <td ><input value={this.state.email} name="email"  disabled/></td>
                                <td ><input value={this.state.department} name="department"  disabled /></td>
                                <td ><input value={this.state.salary} name="salary"  disabled /></td>
                                <td>
                                    
                                    <button className="btn btn-outline-danger ">Delete</button>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
