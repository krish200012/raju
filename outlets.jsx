import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../footer/Footer'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { SingleOutlet } from './SingleOutlet';

export const Outlets = () => {
    
    const [outletDetails,setOutletDetails] = useState([]);

  useEffect(()=>{
    async function getOutlets(){
      const backendData = await axios.get('http://localhost:5000/admin/outlets/get');

      if(backendData.data){
        console.log(backendData.data);
        setOutletDetails(backendData.data);
      }
    }
    getOutlets();
  },[])
  return (
    <>  <center><h1 style={{backgroundColor:"orange"}}>Our Outlets</h1></center>
        <Container>
            <Row>
                {   outletDetails.outlet&&
                    outletDetails.outlet.map((ele)=>(
                        <Col md={4} key={ele._id}>
                            <SingleOutlet city={ele.city} address={ele.address} pincode={ele.pincode} status={ele.status} type={ele.type} />
                        </Col>
                    ))
                }
            </Row>
            <Footer/>
        </Container>
    </>
  )
}
