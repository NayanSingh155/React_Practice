import React from 'react'
import Todo from './Todo';
type CounterProps ={
    init:number;
    children?:JSX.Element | JSX.Element[];
    // onClick?:(x:string, y:number) =>string;
    // onClick:()=>void  can return anything
}
function Counter(props:CounterProps) {
    const {init,children} = props;
    const [counter,setCounter] = React.useState(init)
  return (
    <div>
        <h3> Counter :{counter}</h3>
        {children}
        <button onClick={()=>setCounter(counter+1)}>Increase</button>
        <Todo/>
    </div>
  )
}

export default Counter