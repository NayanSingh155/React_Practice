import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterIncrement,counterDecrement } from '../store/action'
function Counter() {
    const counter = useSelector(state=>state.count)
    const dispatch=useDispatch()
  return (
    <div>Counter:{counter}
    <div>
        <button onClick={()=> dispatch(counterIncrement(1))}>Increment</button>
        <button onClick={()=>dispatch(counterDecrement(1))}>Decrement</button>
    </div>
    </div>
  )
}

export default Counter