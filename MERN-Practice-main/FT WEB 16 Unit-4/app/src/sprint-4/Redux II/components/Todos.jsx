import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { get } from '../store/action';
import InputTodo from './InputTodo';
import Todo from './Todo';

function Todos() {
   
    const {data,isError,isLoading}= useSelector(state=>state.todos)
    const dispatch=useDispatch()
    
    React.useEffect(()=>{
        get(dispatch)
    },[])
    if (isLoading) return <div>...Loading</div>
    if (isError) return <div>...Error</div>
  return (
    <div>
      <h1>Todo List</h1>
      <InputTodo/>
     { data.map(todo=>{
         return (
            <Todo key={todo.id} {...todo}/>
           )
     })}
    </div>
  )
}

export default Todos