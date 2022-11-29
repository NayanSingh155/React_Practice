import React from "react";
 
let Counter = () => {
    const [counter,setCounter]=React.useState(0)
  const handle = (value) => {
    setCounter(counter+value)
  }
  const handle1 = () => {
    setCounter(counter*2)
  }
    return (
        <>
          <h2>
        Counter
      </h2>
    <h2>
      {counter}
    </h2>
    <button onClick={() => handle(1)}>Increament</button>
    <button onClick={() => handle(-1)}>Decreament</button>
    <button onClick={() => handle1()}>Double</button>
        </>
    )
}
export default Counter;