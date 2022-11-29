import React from 'react'
type Greetprops ={
    name:string;
    msg:number;
    isLoggedIn:boolean;
}
function greet(props:Greetprops) {
  return (
    <div>
        <h2>{props.isLoggedIn ? `${props.name} you have ${props.msg} `:"welcome guests"}</h2>
    </div>
  )
}

export default greet