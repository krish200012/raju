import React from 'react'
import './login.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const history=useNavigate()
    const [user, setUser]=useState({email:"", password:""});

    const hanndleChange=(e)=>{
      const {name, value}=e.target;
      setUser({...user,[name]:value});
    };


   const submit= async(event)=>{
    event.preventDefault();
    
    try{
      const userData= await axios.post("http://localhost:5000/user/login",user);
      console.log(userData.data);
      localStorage.setItem("id", userData.data.id)
      localStorage.setItem("userName", userData.data.name)

      alert("Logged in successful")
      if(userData.data.access==="admin"){
        console.log(userData.data.access)
        history("/admin")
      }
      else{
        history("/")
      }
      window.location.reload(true)
    }catch(err){
      if( err.message && err.message.status===401)
      console.log(err)
      alert("Invalid Credentials!! Try Again")
    }
   }

  return (
    <>
    <div className="main">
    <ToastContainer/>
    <div >
        <form onSubmit={submit} className="form">
        <h1>Login</h1>
        <input className="input" type="text"   placeholder="Enter your email" onChange={hanndleChange} name="email" value={user.email}></input>
        <br></br>
        <br></br>
        <input className="input" type="password"   placeholder="Enter your password" onChange={hanndleChange} name="password" value={user.password}></input>
        <br></br>
        <br></br>
        <div className='button'><button typeof='submit'>Login</button></div>
        <h3>OR</h3>
        <div className='button'>
          <a href='/register' style={{"textDecoration":"none"}}>Register</a> </div>
          </form>

    </div>
    </div>
    </>
  )
}
 export default Login
