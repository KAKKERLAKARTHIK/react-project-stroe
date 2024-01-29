import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 
import RegistrationForm from '../RegistrationForm/Registration'
import Error from '../Erorpage/error'
import TableObject from '../TableAdding/TabaleObject'
import Homepage from '../AfterLogin/HomePage/Homepage'
import About from '../AfterLogin/AboutPage/About'
import Settings from '../AfterLogin/SettingsPage/Settings'
import Navbar from '../Navbar/Navbar'
import Product from '../AfterLogin/ProductDetails/Product'
import PostLogin from '../PostLogin/PostLogin'
import Prelogin from '../PreLogin/Prelogin'
import Login from '../Login/Login'
import { createContext } from 'react'
export const Details=createContext()

 export const Dark=createContext()

export default function NavigathionStak() {
  const [login,setLogin]=useState(false)
 const [darkmode,setDarkmode]=useState(false)
  const Signin=()=>{
  
    setLogin(true)
  }
  const Signout=()=>{
  
    setLogin(false)
  }
  const darkMode=()=>{
    setDarkmode( !darkmode)
  }



  return (
    <Details.Provider value={{login,Signin,Signout}}>
    <BrowserRouter>
    
       
{login?
        <PostLogin/> :
        <Prelogin/> 
        
}

 
    
    </BrowserRouter>
    </Details.Provider>
  )
}
