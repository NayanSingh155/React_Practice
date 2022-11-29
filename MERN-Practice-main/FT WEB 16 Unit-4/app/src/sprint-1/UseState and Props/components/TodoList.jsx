import React from "react";
import TodoItem from "./TodoItem.jsx"
let TodoList = (props) => {
    let data = props.data;
    
   return (
    data.map((el,i)=>{
       
        return (
            <div>
          <TodoItem color = {i%2===0?"green" : "blue"} {...el}></TodoItem>
        
            </div>
        )
        
    })
   )
   
}

export default TodoList;
// if(false) {
//     ....
// } else {

// }