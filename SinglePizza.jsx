import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


export const SinglePizza = (props) => {
  const history=useNavigate()
  const handleClick=()=>{
    if(!localStorage.getItem("id"))
    {
      history("/login")
      alert("Login to place order")
    }
  }
  
  return (
    <>
      <Card style={{width:'20rem', "margin":15}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body style={{backgroundColor:"black"}}>
        <Card.Title style={{color:"white", fontSize:25}}>{props.name}</Card.Title>
        <Card.Title style={{color:"white", fontSize:15}}> {props.type}</Card.Title> 
        <hr style={{color:"white"}}></hr> 
        <Card.Text style={{color:"white"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button style={{backgroundColor:"orange", color:"black"}} onClick={handleClick}>Add to Cart</Button>
      </Card.Body>
      <input type="number"  placeholder='Select Number of Pizzas' style={{backgroundColor:"orange", color:"black", }}/>
      </Card>
    </>
  )
}
