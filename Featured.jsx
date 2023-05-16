// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.css'


// function Featured() {
//   return (
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Featured() {
return (
	<div style={{ display: 'block', width: 1000, marginBottom:50,backgroundColor:"lightblue" }}>
	<h4>Todays Specials</h4>
	<Carousel>
		<Carousel.Item interval={1000}>
		<img className=' w-200 d-block' style={{height:"500px", width:"1200px", alignItems:"center"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1920px-Pizza-3007395.jpg" alt="Error"/>
		<Carousel.Caption>
			<h3 style={{width:1000}}>Veggie Herb Delight</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption>
		{/* </Carousel.Item> */}
		{/* <Carousel.Item interval={1500}>
		<img className="d-block w-100" src="" alt="Error"/> */}
		{/* <Carousel.Caption>
			<h3>Label for second slide</h3>
			<p>Sample Text for Image Two</p>
		</Carousel.Caption> */}
		</Carousel.Item>
		<Carousel.Item interval={1000}>
		<img className="d-block w-100" style={{height:"500px", width:"1200px", alignItems:"center"}} src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=1380&t=st=1683976499~exp=1683977099~hmac=25eef95434246b14a74cd39c3c6fc8885340e1a823a0375f27a13c5b77f111f0" alt="Error"/>
		{/* <Carousel.Caption>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption> */}
		</Carousel.Item><Carousel.Item interval={1000}>
		<img className="d-block w-100" style={{height:"500px", width:"1200px", alignItems:"center"}} src="https://www.kingarthurbaking.com/sites/default/files/styles/hero_lg_2x/public/2021-10/sourdough-pizza-crust_marquee.jpg?itok=UcW5Q2KM" alt="Error"/>
		{/* <Carousel.Caption>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption> */}
		{/* </Carousel.Item><Carousel.Item interval={1500}>
		<img className="d-block w-100" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="Error"/>
		<Carousel.Caption>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption> */}
		</Carousel.Item>
	</Carousel>
	</div>
);
}
