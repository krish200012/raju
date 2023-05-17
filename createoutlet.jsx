import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const CreateOutlet=()=>{
    const history=useNavigate()

    const [outlet, setOutlet]=useState({
        city:"",
        address:"",
        pincode:"",
        status:"",
        type:"",
    })

    const handleChange=(e)=>{
        const{name,value}=e.target
        setOutlet((prev)=>{
            return{
                ...prev,
            [name]:value,            
        };
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(outlet)
        axios.post("http://localhost:5000/admin/outlets/createOutlet",outlet)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
        history("/admin/outlets")
    }


    return(
        <center>
            <form style={{ paddingTop:50, backgroundColor:"lightblue", width:500, height:500, borderRadius:'20%'}} onSubmit={handleSubmit}>
            <label style={{fontSize: '2rem'}}>Enter New Outlet Details</label>
            <br/>
            <br/>
            <input type="text" name="city" value={outlet.city} placeholder="Outlet City" onChange={handleChange}></input>
            <br/>
            <br/>
            <input type="text" name="address" value={outlet.address} placeholder="Address" onChange={handleChange}></input>
            <br/>
            <br/>
            <input type="text" name="pincode" value={outlet.pincode} placeholder="Pincode" onChange={handleChange}></input>
            <br/>
            <br/>
            <input type="text" name="status" value={outlet.status} placeholder="Status" onChange={handleChange}></input>
            <br/>
            <br/>
            <input type="text" name="type" value={outlet.type} placeholder="Type" onChange={handleChange}></input>
            <br/>
            <br/>
            <button type="submit">Submit</button>
        </form>
        </center>
    )
}

export default CreateOutlet
