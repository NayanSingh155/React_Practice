import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../Context/authContext'

const Delete = () => {
    const [data,setData]=useState([])
    const navigate=useNavigate()
    const { isLoadng, setIsLoading, succ, setIsErr, isErr, setSucc } =
    useContext(AuthContext);
    const handleRestore=(id)=>{
        axios.put(`http://localhost:8080/blogs/${id}/restore`)
        alert("Item Restored")
        navigate("/blogs")
        
      }
    useEffect(()=>{
        axios.get("http://localhost:8080/blogs").then(({data})=>{
           setData(data)
        })
    },[])
  return (
    <>
             <h2>Deleted Blogs</h2>
             <div className="blogs">
        {data.map((e, i) => {
          if (e.deleted) {
            return (
                <div key={i}> 
                
                  <h3>{e.title}</h3>  
                  <p>Created At {e.createdAt}</p>
                   <button onClick={()=>handleRestore(e._id)} className='btn'>Restore</button>
              </div>
            );
          }
        })}
      </div>
           </>
  )
}

export default Delete