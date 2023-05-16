import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import PizzaData from '../../data/PizzaData'
import { SinglePizza } from '../../data/SinglePizza'
import Footer from '../../footer/Footer'
import Featured from '../featured/Featured';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export const Pizzas = () => {
    
    const [pizzaDetails,setPizzaDetails] = useState([]);

  useEffect(()=>{
    async function getPizza(){
      const backendData = await axios.get('http://localhost:5000/admin/pizza/get');

      if(backendData.data){
        console.log(backendData.data);
        setPizzaDetails(backendData.data);
      }
    }

    getPizza();
  },[])
  return (
    <>  
        <Container>
            <center><Featured/></center>
            <Row>
                {   pizzaDetails.pizza&&
                    pizzaDetails.pizza.map((ele)=>(
                        <Col md={4} key={ele._id}>
                            <SinglePizza  name={ele.name} type={ele.type} image={ele.image}  />
                        </Col>
                    ))
                }
            </Row>
            <Footer/>
        </Container>
    </>
  )
}
