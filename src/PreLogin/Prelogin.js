import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegistrationForm from '../RegistrationForm/Registration'
import TableObject from '../TableAdding/TabaleObject'
import Error from '../Erorpage/error'
import Login from '../Login/Login'
export default function Prelogin() {
  return (
   <Routes>
     <Route path="/" Component={RegistrationForm}/>
        <Route path='*' Component={Error}/>
        
        <Route path='Login' Component={Login}/>
   </Routes>
  )
}
