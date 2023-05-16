import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Table from 'react-bootstrap/Table';



const EditPizza=()=>{
    const history=useNavigate()

    const [pizza, setPizza]=useState({
        name:"",
        size:"",
        prices:"",
        image:"",
        type:"",
        description:""
    })
    const {id}=useParams();
    useEffect(()=>{
        const data=async()=>{
            const pizzas=await axios.get(`http://localhost:5000/admin/pizza/getone/${id}`)
            setPizza({
                name:pizzas.data.pizza.name, 
                size:pizzas.data.pizza.size,
                prices:pizzas.data.pizza.prices,
                image:pizzas.data.pizza.image,
                type:pizzas.data.pizza.type,
                description:pizzas.data.pizza.description
            })
            console.log(pizzas.data.pizza.name)
        }
        data()
    },[pizza])
    

    const handleChange=(e)=>{
        const{name,value}=e.target
        setPizza((prev)=>{
            return{
                ...prev,
            [name]:value,            
        };
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        await axios.patch(`http://localhost:5000/admin/pizza/update/${id}`,
        {name:pizza.name,
         size:pizza.size,
        prices:pizza.prices,
        image:pizza.image,
        type:pizza.type,
        description:pizza.description
    })
    history("/admin")
    }


    return(
        <>
        <Table striped bordered hover>
      <thead>
          <th>Pizza Name</th>
          <th>Size</th>
          <th>Price</th>
          <th>Image</th>
          <th>Type</th>
          <th>Description</th>
        
      </thead>
      </Table>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={pizza.name} placeholder="Pizza Name" onChange={handleChange}></input>
            <input type="text" name="size" value={pizza.size} placeholder="Size" onChange={handleChange}></input>
            <input type="text" name="prices" value={pizza.prices} placeholder="Price" onChange={handleChange}></input>
            <input type="text" name="image" value={pizza.image} placeholder="Image Link" onChange={handleChange}></input>
            <input type="text" name="type" value={pizza.type} placeholder="Veg/Non-Veg" onChange={handleChange}></input>
            <input type="text" name="description" value={pizza.description} placeholder="Description" onChange={handleChange}></input>
            <button type="submit">Submit</button>
            
        </form>
        </>
    )
}

export default EditPizza
