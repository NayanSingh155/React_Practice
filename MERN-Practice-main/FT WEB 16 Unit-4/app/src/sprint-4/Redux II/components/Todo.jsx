import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleDelete } from '../store/action'

function Todo({title,id}) {
    const dispatch=useDispatch()
   const deleteTodo=()=>{
       handleDelete(id,dispatch)

   }
  return (
    <>
    <Link to = {`/${id}`}><div>
        {title}
    <button onClick={deleteTodo}>Delete</button></div></Link>
    </>
  )
}

export default Todo