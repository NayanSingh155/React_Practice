import React from "react";
import {ToDoInput} from "./ToDoInput"
import {ToDoItem} from "./ToDoItem"
function Todo(){
    const [todos,setTodos]=React.useState([]);
    const addTodos = (data)=>{
        setTodos([...todos,data]);
    }
 return <div>
  
     <ToDoInput addTodos={addTodos}/>
     {todos.map((e)=><ToDoItem todo ={e}/>)}
 </div>
}
export default Todo;