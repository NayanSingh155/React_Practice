import React from 'react'
import Counter from './Counter'

function Cart() {
  const [show,setShow]=React.useState(false)
  return (
    <div>
    {!show ? <button onClick={()=>setShow(true)}>ADD to cart</button>:
      <Counter/>
}
       
    </div>
  )
}

export default Cart