import React from 'react'
import Square from './Square'
import "./Grid.css"
function Grid() {
  const [state,setState] =React.useState(false);
  const [value,setValue] =React.useState() ;
  const [arr,setArr] =React.useState(Array(9).fill(0));
  
  const changeState = ()=>{
    setState(!state);
    if(state){
      setValue("X")
    }else{
      setValue("O")
    }
  }
  
  
  return (
    <div className="grid">
    {
     arr.map((e)=>{
      
     
     })
     
    
    }
    </div>
  )
}

export default Grid