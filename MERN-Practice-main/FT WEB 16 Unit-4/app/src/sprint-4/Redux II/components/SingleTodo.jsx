import React from 'react'
import { useParams } from 'react-router-dom';
function SingleTodo() {
    const {id} = useParams();
  return (
    <div>SingleTodo</div>
  )
}

export default SingleTodo