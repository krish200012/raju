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
import { Outlets } from '../../components/outlets/Outlets'
import { Admin } from '../admin/Admin'
import AdminOutletControl from '../admin/AdminOutletControl'
import CreateOutlet from '../admin/CreateOutlet'
import EditOutlet from '../admin/EditOutlet'
import { Order } from '../order/Order'

const Home = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Pizzas/>} exact />
        <Route path='/about' element={<About/>} exact />//
        <Route path='/contact' element={<Contact/>} exact /> //
        <Route path='/login' element={<Login/>} exact/>//
        <Route path='/register' element={<Register/>} exact/>//
        <Route path='/admin' element={<Admin/>} exact/>
        <Route path='/admin/pizza' element={<AdminPizzaControl/>} exact/>
        <Route path='/admin/createPizza' element={<CreatePizza/>} exact/>
        <Route path='/admin/updatePizza/:id' element={<EditPizza/>} exact/>
        <Route path='/outlets' element={<Outlets/>} exact />
        <Route path='/admin/outlets' element={<AdminOutletControl/>} exact/>
        <Route path='/admin/createOutlet' element={<CreateOutlet/>} exact/>
        <Route path='/admin/updateOutlet/:id' element={<EditOutlet/>} exact/>
        <Route path='/order' element={<Order/>} exact/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Home;
