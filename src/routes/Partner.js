import React, { Component } from 'react'


class Partner extends Component {
    state = {
        getWorkers: [],
        loaded: false
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/workers')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    getWorkers: result,
                    loaded: true
                })
                console.log(this.state.getWorkers)
            })
            .catch(error => console.log(`Error fetch API ${error}`))
    }

    // handle Edit
    handleEdit= ()=>{
     alert('Edit')
    }
    // handle Delete 
    handleDelete = () => {
        alert('Delete')
    }

    render() {
        let { getWorkers, loaded } = this.state
        if (!loaded) {
            return <div>loading data ....</div>
        }
        return (
            <div>
         
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
                                <th  scope="row"></th>
                                <td>{worker.firstname}</td>
                                <td>{worker.lastname}</td>
                                <td>{worker.email}</td>
                                <td>{worker.department}</td>
                                <td>{worker.salary}</td>
                                <td>
                                    <button className="mr-1 btn btn-info btn-sm" onClick={this.handleEdit}>Edit</button>
                                    <button className=" btn btn-danger btn-sm" onClick={this.handleDelete}>Delete</button>
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