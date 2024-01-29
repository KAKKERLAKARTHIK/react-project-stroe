import React, { useReducer } from 'react'
const intialize={
    count:0,
    greeting:"goodafternoon"
}
const reduceFunction=(state,action)=>{
switch (action.type){
    case "INCRIMENT":
        return {...state,count:state.count+2}
}



}


export default function UseReducer() {
   const [currentstate,dispacth]= useReducer(reduceFunction,intialize)
    
   const handleClick=()=>{
    dispacth({
        type:"INCRIMENT"
    })
   }


  return (
    <div>
<h4>{currentstate.count}</h4>
<button onClick={handleClick}>incliment</button>


    </div>
  )
}
