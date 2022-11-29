import React from 'react'

function InputTodo() {
  const [value,setValue]=React.useState("")
  return (
    <div>
      <input placeholder='Enter Todo' onChange={(e)=>setValue(e.target.value)}/>
      <button>Add</button>
    </div>
  )
}

export default InputTodo