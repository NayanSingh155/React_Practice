import React from 'react'
import "./Square.css"
function Square({state,changeState}) {
 console.log( )
    const [value,setValue] =React.useState(Array(9).fill(0));
    
    // const changeValue =()=>{
    //     changeState();
    //     if(state){
    //         setValue("O")
        
    //     }else {
    //         setValue("X");
         
    //     }
    //     console.log(state)
    // }
   
  return (
    <div>
    
    <div className="squares"  >{value}</div>
       
    </div>
  )
}

export default Square