import React, { useEffect, useState } from 'react'

export default function CountTimer() {


useEffect(()=>{
    
    let inter=   setInterval( ( )=>{
        setCount((prev)=>prev+1)
console.log(  setCount((prev)=>prev+1));
            },1000
        )
        return ()=>{clearInterval(inter)}


},[])

const[count,setCount]=useState(0)
// console.log(count);
const handle=()=>{


}


  return (
    <>
    {/* <button>click</button> */}
    <div>{count}</div>
    </>
  )
}
