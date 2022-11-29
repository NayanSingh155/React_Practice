import React from 'react'
import TodoItem from './TodoItem'

function TodoList({data}) {
  return (
    <div>
        {data.map((e)=>{
           return <div key={e.id}> <TodoItem item ={e.title} /></div>
        })}
    </div>
  )
}

export default TodoList