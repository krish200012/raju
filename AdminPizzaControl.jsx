import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'


function AdminPizzaControl() {
    useEffect(()=>{
        getPizza();
    },[]);

    const [pizza,setPizza]=useState("")

    async function getPizza(){
        try{
            const res=await axios.get("http://localhost:5000/admin/pizza/get/")
            console.log(res.data);
            setPizza(res.data.pizza);
        }   catch (err) {
            console.log(err)
        }
    }
    
   async function handleDelete(id){
        try {
            axios.delete(`http://localhost:5000/admin/pizza/delete/${id}`)
            getPizza()
            window.location.reload(true)
            

        } catch (error) {
            console.log(error)
        }
    }
const history=useNavigate()
  return (
    <>
    <Table striped bordered hover>
      <thead>
        
          <th>Product Id</th>
          <th>Pizza Name</th>
          <th>Size</th>
          <th>Price</th>
          <th>Type</th>
          <th>Image</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        
      </thead>
      {pizza && pizza.map((pizza,index)=>{
        return (
            <tbody>
                <tr class="table">
                    <td>{index+1}</td>
                    <td>{pizza.name}</td>
                    <td>{pizza.size}</td>
                    <td>{pizza.prices}</td>
                    <td>{pizza.type}</td>
                    <td><img src={pizza.image} width="120" height="100"/></td>
                    <td>{pizza.description}</td>
                    <td><button onClick={()=>{history(`/admin/updatePizza/${pizza._id}`)}}>Edit</button></td>
                    <td><button onClick={()=>{handleDelete(pizza._id)}}>Delete</button></td>

                </tr>
            </tbody>
        )
    })}

    </Table>
    <br></br>
    <br></br>
    <center><button onClick={()=>{history("/admin/createPizza")}}>Create New</button></center>
    </>
  );
}

export default AdminPizzaControl;
