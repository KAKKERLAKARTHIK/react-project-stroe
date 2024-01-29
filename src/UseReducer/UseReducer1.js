import { useReducer } from "react"
import React from "react"
const intilize={
count:0,
greeeting:"goodmorning"
}
 
const reducer=(state,action)=>{

switch(action.type){

    case "INCRIMENT":
        return {...state,count:state.count+5}
}



}


export default function UseReducer1() {



const [currentstate,upDateState]=useReducer(reducer,intilize)
   
const handle=()=>{
    upDateState({
        type:"INCRIMENT"
    })

    
}




  return (
    <>
<button onClick={handle}>click me</button>
 
<h1>{currentstate.count}</h1>


    </>
  )
}
