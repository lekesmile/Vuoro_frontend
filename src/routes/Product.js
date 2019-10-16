import React, { Component } from 'react'


class Product extends Component {
    state={
       items:[],
       dataLoader :false
       
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data =>{
            this.setState({
                items:data,
                dataLoader:true
            })
            console.log(this.state.items)
        })
            .catch(error => console.log(`Error fetch API ${error}`))
    }
    render() {
        let { dataLoader, items } = this.state
        if (!dataLoader) {
            return <div>Loading ....</div>
        }
        return (
            <div>
                <ul>
                 {items.map(item =>(

                
                    <li key={item.id}>
                     <p>{item.title}</p>
                     <p>{item.url}</p>
                    </li> 
                    ))}
                </ul>
            </div>
        )
    }
}
export default Product