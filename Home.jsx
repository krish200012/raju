import React from 'react'
import Header from '../../components/header/Header'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import About from '../about/About'
import { Contact } from '../contact/Contact'
import { Pizzas } from '../../components/pizzas/Pizzas'
import Login from '../login/Login'
import Register from '../register/Register'
import CreatePizza from '../admin/CreatePizza'
import EditPizza from '../admin/EditPizza'
import AdminPizzaControl from '../admin/AdminPizzaControl'

const Home = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Pizzas/>} exact />
        <Route path='/about' element={<About/>} exact />
        <Route path='/contact' element={<Contact/>} exact />
        <Route path='/login' element={<Login/>} exact/>
        <Route path='/register' element={<Register/>} exact/>
        <Route path='/admin' element={<AdminPizzaControl/>} exact/>
        <Route path='/admin/createPizza' element={<CreatePizza/>} exact/>
        <Route path='/admin/updatePizza/:id' element={<EditPizza/>} exact/>
        
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Home;
