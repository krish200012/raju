import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const CreatePizza=()=>{
    const history=useNavigate()

    const [pizza, setPizza]=useState({
        name:"",
        size:"",
        prices:"",
        image:"",
        type:"",
        description:""
    })

    const handleChange=(e)=>{
        const{name,value}=e.target
        setPizza((prev)=>{
            return{
                ...prev,
            [name]:value,            
        };
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(pizza)
        axios.post("http://localhost:5000/admin/pizza/createPizza",pizza)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
        history("/admin")
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={pizza.name} placeholder="Pizza Name" onChange={handleChange}></input>
            <input type="text" name="size" value={pizza.size} placeholder="Size" onChange={handleChange}></input>
            <input type="text" name="prices" value={pizza.prices} placeholder="Price" onChange={handleChange}></input>
            <input type="text" name="image" value={pizza.image} placeholder="Image Link" onChange={handleChange}></input>
            <input type="text" name="type" value={pizza.type} placeholder="Veg/Non-Veg" onChange={handleChange}></input>
            <input type="text" name="description" value={pizza.description} placeholder="Description" onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreatePizza
