import React from 'react'
import TodoList from "./TodoList";
import { nanoid } from 'nanoid'
export default function TOdo() {
    const [text,setText] = React.useState("");
    const [list ,setList] =React.useState([]);
  
   
    const handleAdd =(e)=>{
        setText(e.target.value);
       
    }
    const handleDelete =(id)=>{
const updatedList =list.filter(item=>item.id!==id);

setList(updatedList);
    }
    const handleEnter=() => {
        const data = {
            title:text,
            status:"false",
            id:nanoid()
        }
        setList([...list,data]);
       
    }
   
  return (
    <div>
        <input type="text" placeholder = "Do you want to" value={text} onChange={handleAdd}/>
        <button onClick={handleEnter}>Add Todo</button>
        
        <TodoList  list={list} handleDelete={handleDelete} />
    </div>
  )
}
