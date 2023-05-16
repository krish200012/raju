import React from 'react'
import './register.css'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

async function handleRegister (e) {
  e.preventDefault();
  try{
    const res = await axios.post("http://localhost:5000/user/register", {
      name, email, password
    });
    console.log(res);
    alert("Registration Successful")

  } catch (err) {console.log(err)}
}
 
  return (
    <div >
      <form onSubmit={handleRegister} className="register">
      <h1>Register</h1>
        <input className="input" type="text" name="name" placeholder="Enter your Name" onChange={ (e) => setName(e.target.value)}></input>
        <br></br>
        <br></br> 
        <input className="input" type="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}></input>
        <br></br>
        <br></br>
        <input className="input" type="password" name="password"  placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <div className='button'>
          <a href='/login' style={{"textDecoration":"none"}}>Login</a> </div>
        <h3>OR</h3>
        <div className='button'>
        <button type="submit" >Register</button></div>
      </form>
        

    </div>
  )
}
 export default Register
