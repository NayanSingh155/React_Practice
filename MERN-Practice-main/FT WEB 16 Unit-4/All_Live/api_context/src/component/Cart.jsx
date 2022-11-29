import React from 'react'
import {useContext} from 'react';
import {CartContext} from "../contexts/CartContext"
function Cart() {
    const {cart}=useContext(CartContext)
  return (
    <div>Cart :{cart}</div>
  )
}

export default Cart