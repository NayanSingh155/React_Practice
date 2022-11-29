import React from "react";
import TodoList from "./TodoList.jsx"

let Todo = () => {
  // var uidFactory = require('nano-uid');
    const [Todo,setTodo]=React.useState("")
    let [TodoList1,setTodoList1]=React.useState([])
  const handleChange = (e) => {
      setTodo(e.target.value)
  }
  const handleClick= () => {
      let obj = {
          title:Todo,
          status: false
      }
      setTodoList1([...TodoList1,obj])
    //   console.log(TodoList1)
  }
return (
<>
    <div>
    <input type="text" placeholder="Write Something" value={Todo} onChange={handleChange}/>
    <button onClick={handleClick}>+</button>
      
       </div>
      <div>
       <TodoList data={TodoList1}></TodoList>
   </div>
  </>
)

}
export default Todo;