import React ,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX] =useState(0);
    const [y,setY] =useState(0);
    const logMousePosition =(e) =>{
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() =>{
        console.log('UseEffect called');
        window.addEventListener('mousemove',logMousePosition)
    },[])
  return (
    <div>Hook X - {x} Y - {y}</div>
  )
}

export default HookMouse