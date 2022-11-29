import React from 'react'

function TodoItem({title,id,status,handleDelete}) {
    const [stat,showstatus] =React.useState(status);
    const handleToggle=() => {
      stat==="false"?showstatus("true"):showstatus("false")
   
      
    }
  return (
    <div>
        <h3 className="List_items">{title} <button onClick={handleToggle}>{stat}</button></h3>
        <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}

export default TodoItem