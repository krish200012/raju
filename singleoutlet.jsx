import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


export const SingleOutlet = (props) => {
  const history=useNavigate()
  const handleClick=()=>{
    if(!localStorage.getItem("id"))
    {
      history("/login")
      alert("Login to place order")
    }
    else{
      history("/")
    }  
  }
  
  return (
    <>
      <Card style={{width:'18rem', "margin":15}}>
      <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000x1000/95/47/store-building-with-shopping-cart-and-pin-location-vector-27979547.webp" />
      <Card.Body style={{backgroundColor:"black"}}>
        <Card.Title style={{color:"white", fontSize:25}}>{props.city}</Card.Title>
        <Card.Title style={{color:"orange", fontSize:20}}> {props.status}</Card.Title> 
        <hr style={{color:"white"}}></hr> 
        <Card.Title style={{color:"white", fontSize:15}}> {props.address}</Card.Title> 
        <Card.Title style={{color:"white", fontSize:15}}> {props.pincode}</Card.Title> 
        <hr style={{color:"white"}}></hr> 
        <Card.Title style={{color:"orange", fontSize:15}}> Availability : &nbsp;{props.type}</Card.Title> 
        <hr style={{color:"white"}}></hr> 
        <center><Button style={{backgroundColor:"orange", color:"black"}} onClick={handleClick} >ORDER NOW</Button></center>
      </Card.Body>
      </Card>
    </>
  )
}
