import React,{useReducer} from 'react'
const initState =0;
const reducer =(state,action) => {
    switch(action){
case 'Increment':
    return state+1;
    case 'Decrement':
        return state-1;
        case 'Reset':
            return initState
            default:
                return state;
    }
}
function CounterReducer() {
   const [count,dispatch]= useReducer (reducer,initState)
  return (
    <div>
    <div>{count}</div>
    <button onClick={()=>dispatch('Increment')}>Increment</button>
    <button onClick={()=>dispatch('Decrement')}>Decrement</button>
    <button onClick={()=>dispatch('Reset')}>Reset</button>
    </div>
  )
}

export default CounterReducer