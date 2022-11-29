import React from 'react'
import Todoitem from "./TodoItem"
function TodoList({list,handleDelete}) {
    console.log(list);
   
  return (
    <div>
    {list.map(function(item){
       return (
          <div key ={item.id}> <Todoitem {...item} handleDelete={handleDelete} /></div>
       
       )
      
    })}
        
    </div>
  )
}

export default TodoList