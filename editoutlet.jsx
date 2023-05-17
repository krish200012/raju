import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Table from 'react-bootstrap/Table';



const EditOutlet=()=>{
    const history=useNavigate()

    const [outlet, setOutlet]=useState({
        city:"",
        address:"",
        pincode:"",
        status:"",
        type:"",
    })
    const {id}=useParams();
    useEffect(()=>{
        const data=async()=>{
            const outlet=await axios.get(`http://localhost:5000/admin/outlets/getone/${id}`)
            setOutlet({
                city:outlet.data.outlet.city, 
                address:outlet.data.outlet.address,
                pincode:outlet.data.outlet.pincode,
                status:outlet.data.outlet.status,
                type:outlet.data.outlet.type,
            })
            // console.log(outlet.data.outlet.name)
        }
        data()
    },[])
    

    const handleChange=(e)=>{
        const{name,value}=e.target
        setOutlet((prev)=>{
            return{
                ...prev,
            [name]:value,            
        };
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        await axios.patch(`http://localhost:5000/admin/outlets/update/${id}`,
        {city:outlet.city,
         address:outlet.address,
        pincode:outlet.pincode,
        status:outlet.status,
        type:outlet.type,
    })
    history("/admin/outlets")
    }

    return(
        <>
        <Table striped bordered hover>
      <thead>
          <th>City Name</th>
          <th>Address</th>
          <th>Pincode</th>
          <th>Status</th>
          <th>Type</th>
        
      </thead>
      </Table>
        <form onSubmit={handleSubmit}>
            <input type="text" name="city" defaultValue={outlet.city} placeholder="City Name" onChange={handleChange}></input>
            <input type="text" name="address" defaultValue={outlet.address} placeholder="Address" onChange={handleChange}></input>
            <input type="text" name="pincode" defaultValue={outlet.pincode} placeholder="Pincode" onChange={handleChange}></input>
            <input type="text" name="status" defaultValue={outlet.status} placeholder="Status" onChange={handleChange}></input>
            <input type="text" name="type" defaultValue={outlet.type} placeholder="Veg/Non-Type" onChange={handleChange}></input>
            <button type="submit">Submit</button>
            
        </form>
        </>
    )
}

export default EditOutlet
