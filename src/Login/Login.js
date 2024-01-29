import axios from 'axios'
import React, { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Details } from '../Navigationstak/NavigathionStak'
// import Login
import { Fragment } from 'react'
import "./Login.css"
import image from "./Screenshot 2023-12-20 205223.png";
export default function Login() {
  
 const user=useContext(Details)
 console.log(user);
//  const { login, Signin, Signout } = user
const [data,setData]=useState([])
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
  const navigate=useNavigate()
const handleSubmit=(e)=>{
  e.preventDefault()
  axios.get("http://localhost:3001/posts")

  .then((res)=>{
    const findUser = res.data.find(user => user.username === username)
      if(findUser){
         user.Signin()
         navigate("/")
      }else{
        alert("please register")
      }
  }
  ) 

 
}
const handleUsername=(e)=>{
setUsername(e.target.value)


}
const handlePassword=(e)=>{
  setPassword(e.target.value)
  
  
  }



  return (
    <div className='Login'>
    {/* <button onClick={handleClick}>click me</button> */}
    
   <form onSubmit={handleSubmit} className='Form'>
   <div style={{width:"100%",height:"50%",backgroundColor:"#84bbf4"}}><img src={image} style={{marginTop:"-22%",marginLeft:"12%"}}/></div>
   <center><input type='text' value={username} onChange={handleUsername} placeholder='username' className='UN'/><br/>
  <input type='password' value={password} onChange={handlePassword} placeholder='password' className='PW'/><br/>
  <input type='submit' value={"Login"} className='SB'/></center>
  
   </form>
    </div>
  )
  }
