import React from "react"
export default function Home() {
  const [count,setCount]=React.useState(0)
  return (
    <div style={{textAlign:"center"}}>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Add</button>

    </div>
  )
}
