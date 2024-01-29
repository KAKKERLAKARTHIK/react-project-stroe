import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../AfterLogin/HomePage/Homepage'
import About from '../AfterLogin/AboutPage/About'
import Settings from '../AfterLogin/SettingsPage/Settings'
import Product from '../AfterLogin/ProductDetails/Product'
import AddTocart from '../AfterLogin/addtocart/AddTocart'

export default function PostLogin() {
  return (
    <>
    <Routes>

    <Route path="/" Component={Homepage}/>
        <Route path="/AddTocart" Component={AddTocart}/>
        <Route path="/Settings" Component={Settings}/>
        <Route path="/Product/:id" Component={Product}/>
    </Routes>
    
    
    </>
  )
}
