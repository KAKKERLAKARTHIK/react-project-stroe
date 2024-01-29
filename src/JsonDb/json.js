import axios from 'axios'
import React, { useState } from 'react'

export default function Json() {

const [data,setData]=useState([])
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
  
const handleSubmit=(e)=>{
  e.preventDefault()
const userDetails={
  usename:username,
  password:password
}
console.log(userDetails);
axios.post("http://localhost:3000/posts",userDetails)
.then((res)=>{
    console.log(res);
})
}
const handleUsername=(e)=>{
setUsername(e.target.value)


}
const handlePassword=(e)=>{
  setPassword(e.target.value)
  
  
  }
  const handleClick=()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
        console.log(res.data);
    }) 
}
  return (
    <>
    <button onClick={handleClick}>click</button>
   <form onSubmit={handleSubmit}>
   <input type='text' value={username} onChange={handleUsername}/>
  <input type='password' value={password} onChange={handlePassword}/>
  <input type='submit' value={"submit"}/>
   </form>
    </>
  )
}
