import React from "react";
import  "./counter.css"
function Counter() {
    const [counter,setCounter]=React.useState(0);
function handleInc(value){
    setCounter(counter+value)
}
function double(){
    setCounter(counter*2)
}
    return (
      <div className="counter" >
        <h1> Counter : {counter}</h1>
<button onClick={()=>{handleInc(1)}}>Add 1</button>
<button onClick={()=>{
   if(counter>=1){
    handleInc(-1)
   }
    }}>sub 1</button>
    <button onClick={()=>{double()}}>double</button>
      </div>
    );
  }
  
  export default Counter;