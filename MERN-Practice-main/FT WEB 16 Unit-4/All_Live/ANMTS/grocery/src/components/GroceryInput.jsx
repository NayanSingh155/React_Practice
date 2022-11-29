import React from 'react'
import {useState} from "react"

function GroceryInput({getData}) {
    const [text ,setText] =useState("");
    const handleChange =(e) => {
        setText(e.target.value)
    }
    const handleData = () => {
getData(text);
    }
  return (
    <div>
    <input type="text" placeholder="Enter todo" onChange={handleChange}/>
    <button onClick={handleData}>Add todo</button>
    </div>
  )
}

export default GroceryInput