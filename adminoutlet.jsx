import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'


function AdminOutletControl() {
    useEffect(()=>{
        getOutlet();
    },[]);

    const [outlet,setOutlet]=useState("")

    async function getOutlet(){
        try{
            const res=await axios.get("http://localhost:5000/admin/outlets/get")
            console.log(res.data);
            setOutlet(res.data.outlet);
        }   catch (err) {
            console.log(err)
        }
    }
    
   async function handleDelete(id){
    if(window.confirm("Are you Sure?")===true)
    {
        try {
            axios.delete(`http://localhost:5000/admin/outlets/delete/${id}`)
            getOutlet()
            window.location.reload(true)
            

        } catch (error) {
            console.log(error)
        }
    }
}
const history=useNavigate()
  return (
    <>
    <Table striped bordered hover>
      <thead>
        
          <th>Outlet Id</th>
          <th>City</th>
          <th>Address</th>
          <th>Pincode</th>
          <th>Status</th>
          <th>Type</th>
          <th>Edit</th>
          <th>Delete</th>
        
      </thead>
      {outlet && outlet.map((outlet,index)=>{
        return (
            <tbody>
                <tr class="table">
                    <td>{outlet._id}</td>
                    <td>{outlet.city}</td>
                    <td>{outlet.address}</td>
                    <td>{outlet.pincode}</td>
                    <td>{outlet.status}</td>
                    <td>{outlet.type}</td>
                    <td><button style={{backgroundColor:"lightblue", color:"black", width:100, borderRadius:20}} onClick={()=>{history(`/admin/updateoutlet/${outlet._id}`)}}>Edit</button></td>
                    <td><button  style={{backgroundColor:"orange", color:"black", width:100, borderRadius:20}} onClick={()=>{handleDelete(outlet._id)}}>Delete</button></td>

                </tr>
            </tbody>
        )
    })}

    </Table>
    <br></br>
    <br></br>
    <center><button style={{backgroundColor:"black", color:"orange", width:200, height:50, borderRadius:20}} onClick={()=>{history("/admin/createOutlet")}}>Create New Outlet</button></center>
    </>
  );
}

export default AdminOutletControl;
