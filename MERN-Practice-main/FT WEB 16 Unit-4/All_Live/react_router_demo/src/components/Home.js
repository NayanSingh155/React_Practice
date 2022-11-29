import React from 'react'
import {useNavigate} from "react-router-dom"
function Home() {
  const navigate =useNavigate();
  return (
    <div>
    <div>Home</div>
    {/* useNavigate means where you are going */}
    <button onClick={()=>navigate('order')}>place order</button>
    
    </div>
  )
}

export default Home