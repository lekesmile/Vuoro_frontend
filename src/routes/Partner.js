import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Modal from '../component/Modal';




class Partner extends Component {
    state = {
        getWorkers: [],
        loaded: false,

    }


    _isMounted = false;

    //Fetch the worker from database

    componentDidMount() {
        fetch('http://localhost:5000/api/workers/')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    getWorkers: result,
                    loaded: true
                })

            })
            .catch(error => console.log(`Error fetch API ${error}`))
    }

    // Update the page after it has been updated

    componentDidUpdate() {
        axios.get('http://localhost:5000/api/workers')
            .then(res => {
                if (this.loaded) {
                    this.setState({
                        getWorkers: res.data,
                       
                    })
                }
            })
            .catch(error => console.log(`Error fetch API ${error}`))
    }

    // Reload the state
    componentWillUnmount() {
        this.loaded = true;
    }




    render() {

    // Destruction
        let { getWorkers, loaded } = this.state

     // Display loading data is problem accessing the api
        if (!loaded) {
            return <div>loading data ....</div>
        }

       


        return (
            <div>
               <Modal />
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
                        {getWorkers.map(worker => (
                            <tr key={worker._id}>
                                <th scope="row"></th>
                                <td>{worker.firstname}</td>
                                <td>{worker.lastname}</td>
                                <td>{worker.email}</td>
                                <td>{worker.department}</td>
                                <td>{worker.salary}</td>
                                <td>
                                    <Link to={"/edit/" + worker._id} className="btn btn-outline-info mx-1">Edit</Link>
                                    <Link to={"/delete/" + worker._id} className="btn btn-outline-danger ">Delete</Link>

                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Partner