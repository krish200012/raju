import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const[logIn,setLogIn] = useState(false)

  useEffect(()=>{
    const id  = localStorage.getItem("id")

    if(id){
      setLogIn(true)
    }
  },[])

  const logout=async (event)=>{
    localStorage.clear()
    setLogIn(false)
    alert("Log out Successfully")
  }

  return (
    <>
      <Navbar style={{background:"black"}} variant="light" expand="lg">
        <Container fluid>
            <img style={{height:60, marginLeft:40}} src="https://static.vecteezy.com/system/resources/previews/009/384/620/original/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png" alt="err" />
            <h6 style={{fontFamily:"monospace", fontSize:40, color:"orange" }}><b>PizzaWorld</b></h6>
          <Nav>
            <LinkContainer to="/" activeClassName="" style={{color:"white"}}>
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName="" style={{color:"white"}}>
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName="" style={{color:"white"}}>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          
            {logIn ? (<>
             
            <LinkContainer to="/login" activeClassName="" style={{color:"orange"}}>
              <Nav.Link >Welcome {localStorage.getItem("userName")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/" activeClassName="" style={{color:"white"}}>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </LinkContainer>
            </>) 
            :
            (<>
            <LinkContainer to="/login" activeClassName="" style={{color:"white"}}>
              <Nav.Link >Login</Nav.Link>
            </LinkContainer>
            
            </>)}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
