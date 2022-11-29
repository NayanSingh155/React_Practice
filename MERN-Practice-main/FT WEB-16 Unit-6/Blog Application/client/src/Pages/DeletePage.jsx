import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../App.css"
const DeletePage = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const handleDelete=()=>{
        axios.put(`http://localhost:8080/blogs/${id}/deleted`)
        alert("Item deleted")
        navigate("/blogs")
      }
  return (
    <div className='delete'>
        <p>Are you sure you want to delete?</p>
         <button onClick={handleDelete}>Yes</button>
         <button onClick={()=>navigate(-1)} >No</button>
    </div>
  )
}

export default DeletePage