import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



export const Admin = () => {
    const history=useNavigate()
  return (
    <>
    <center><h1 style={{color:"black",backgroundColor:"orange" }}>Admin - {localStorage.getItem("userName")}</h1></center>
    <hr></hr>
    <Container>
        <Row>
            <Col>
    <Card style={{width:'20rem', "margin":15}}>
      <Card.Img variant="top" height={300} src="https://static.vecteezy.com/system/resources/previews/009/384/620/original/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png" />
      <hr></hr>
      <Card.Body style={{backgroundColor:"white"}}>
        <Card.Title style={{color:"black", fontSize:25}}>PIZZA</Card.Title>
        <hr style={{color:"black"}}></hr> 
        <Card.Text style={{color:"black"}}>
          Perform CRUD operation on Pizza
        </Card.Text>
        <Button style={{backgroundColor:"orange", color:"black"}} onClick={()=>{history("/admin/pizza")}}>Go to Pizza Panel</Button>
      </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card style={{width:'20rem', "margin":15}}>
      <Card.Img variant="top" height={300} src="https://static.vecteezy.com/system/resources/previews/006/398/494/large_2x/illustration-of-store-or-market-flat-design-vector.jpg" />
      <hr></hr>
      <Card.Body style={{backgroundColor:"white"}}>
        <Card.Title style={{color:"black", fontSize:25}}>OUTLETS</Card.Title>
        <hr style={{color:"black"}}></hr> 
        <Card.Text style={{color:"black"}}>
        Perform CRUD operation on Outlets
        </Card.Text>
        <Button style={{backgroundColor:"orange", color:"black"}} onClick={()=>{history("/admin/outlets")}}>Go to Outlet Panel</Button>
      </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
    </>
  )
}
