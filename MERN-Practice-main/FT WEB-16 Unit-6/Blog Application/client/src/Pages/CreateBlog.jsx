import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"
export const CreateBlog=function(){
    const navigate=useNavigate()
    const [formData,setFormData]=useState({})
    const handleChange=(e)=>{
     const input=e.target.name;
      setFormData({
        ...formData,
        [input]:e.target.value
      })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(formData)
        axios.post("http://localhost:8080/blogs",formData)
        alert("item added")
        navigate("/blogs")
    }
    return (
        <>
         <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter title" required name="title" onChange={handleChange} />
            <br/>
            <input type="text" placeholder="Enter Body" required name="body"onChange={handleChange} />
            <br/>
            <input type="submit" value="Create Blog"/>
         </form>
        </>
    )
}