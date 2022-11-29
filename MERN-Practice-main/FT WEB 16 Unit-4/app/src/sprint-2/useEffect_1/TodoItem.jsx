import React from 'react'
import style from "./style.module.css"
function TodoItem({title,id,handleDelete,handleEdit}) {
  const [edit,setEdit]=React.useState(false)
  const [value,setValue]=React.useState(title)
  const handleChange=(e)=> {
    setValue(e.target.value)
}
const handleClick=()=>{
  let v=value.trim()
  if(v){

 onEdit()

setEdit(false) // console.log(TodoList1)
   
  }
}
  let onDelete=async(id)=>{
    let res = await fetch(`http://localhost:8000/todo/${id}`,{
      "method":"DELETE",
      "headers":{"content-type":"application/json"}
      
    })
   
handleDelete(id)
  }
  let onEdit=async()=>{
    let res = await fetch(`http://localhost:8000/todo/${id}`,{
      "method":"PATCH",
      "headers":{"content-type":"application/json"},
      "body":JSON.stringify({
        title:value,
        status:true
      })
      
    })
   let data=await res.json()
handleEdit(data)
  }
  
  return (
    <div className={style.Box} >
   {edit ? (  <><input type="text" placeholder='Enter Todo' value={value} onChange={handleChange}></input>
    <button onClick={handleClick}>Update</button></>) : (<>{title}</>)}
   
   <button onClick={()=>setEdit(!edit)}>Edit</button>
   <button onClick={()=>onDelete(id)}>
     Deelete
   </button>
  
 </div>
  )
}

export default TodoItem;