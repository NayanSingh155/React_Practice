import React from 'react'
import {useContext} from 'react';
import {CartContext} from "../contexts/CartContext"
function Body() {
    const {handleCartUpdate} =useContext(CartContext)
  return (
    <div>Body
    <button onClick={()=>{
handleCartUpdate(1);
    }}>
Buy this laptop 
    </button>
    </div>
  )
}

export default Body