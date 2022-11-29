import React from 'react'
import {v4 as uuid} from "uuid";
// npm install --save-dev @types/packagename
import axios from "axios";
import AxiosResponse from "axios"
type TodoType ={id:string;
  title:string;
  status:boolean}
function Todo() {
  const [text,setText]=React.useState("");
  const [todo,setTodo]=React.useState <TodoType[]>([]);
  const getData =()=>{
    axios.get("http://localhost:8080/todo")
    .then((response:AxiosResponse<TodoType[]>)=>{
      const {data}=response;
    })
  }
  return (
    <div>
        <input value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>{
          const payload ={title:text,status:false}
          // setTodo([...todo,payload]);
          axios.post("http://localhost:8080/todo",payload)
        }}>ADD</button>
        {todo.map(t=>(<div key={t.id}>{t.title}-{t.status ? "Done" :"NOt Done"}</div>))}
    </div>
  )
}

export default Todo