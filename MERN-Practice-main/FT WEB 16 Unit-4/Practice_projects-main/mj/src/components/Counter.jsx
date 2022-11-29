import React from 'react'

function Counter() {
    const [count ,setCount] =React.useState(0);
    const handleclick =(v) => {
        setCount(count+v)
    }
  return (
    <div>
    <button onClick={()=>{handleclick(1)}}>+</button>
    <div>{count}</div>
    <button onClick={()=>{handleclick(-1)}}>-</button>
    </div>
  )
}

export default Counter