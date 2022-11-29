import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [formData,setFormData]=useState({})
    const handleChange=(e)=>{
     const input=e.target.name;
     if(e.target.value!==""){
        setFormData({
            ...formData,
            [input]:e.target.value
          })
     }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(formData)
        axios.put(`http://localhost:8080/blogs/${id}`,formData)
        alert("item edited")
        navigate("/blogs")
    }
  return (
    <div>
         <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter title"  name="title" onChange={handleChange} />
            <br/>
            <input type="text" placeholder="Enter Body"  name="body"onChange={handleChange} />
            <br/>
            <input type="submit" value="Update Blog"/>
         </form>
    </div>
  )
}

export default EditBlog