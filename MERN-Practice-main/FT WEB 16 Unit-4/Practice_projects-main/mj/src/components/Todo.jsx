import React from 'react'
import{useState} from 'react'
import TodoList from './TodoList';
import { nanoid } from 'nanoid'
function Todo() {
    const [text,setText]=useState("");
    const [data,setData]=useState([]);
    const handleAdd =()=>{
      const payload ={
        id:nanoid(),
        title:text,
      }
        setData([...data,payload]);
        setText("");
        console.log(data)
    }
   
  return (
    <div>
        <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
        <button onClick={handleAdd}>add</button>
        <TodoList data={data} />
    {/* {data.map((el)=>{
     return <div>{el}</div>
    })} */}
    </div>
  )
}

export default Todo