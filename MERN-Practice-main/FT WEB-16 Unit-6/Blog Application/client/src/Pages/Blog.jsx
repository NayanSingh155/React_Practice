import axios from "axios"
import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect } from "react"
import { useState } from "react"
import "../App.css"
import { AuthContext } from "../Context/authContext";
export const Blog=function(){
    const { isLoadng, setIsLoading, succ, setIsErr, isErr, setSucc } =
    useContext(AuthContext);
    const [data,setData]=useState({})
    const {id}=useParams()
    useEffect(()=>{
       setTimeout(()=>{
        axios.get(`http://localhost:8080/blogs/${id}`).then(({data})=>{
            setData(data)
         })
       },2000)
    },[])
   if(isLoadng){
    return(
        <>
            <h2>Loading..</h2>
        </>
    )
   }
   else if(isErr){
    return(
        <>
            <h2>Something went wrong..</h2>
        </>
    )
   }
   else{
    return(
        <>
           <div className="blog">
           <br/>
             <h3>{data.title}</h3>
             <br/>
              <p>{data.body}</p>
              <br/>
              <div>
              <button><Link to={`/blogs/${data._id}/edit`}>Edit</Link></button>
              <button><Link to={`/blogs/${data._id}/delete`}> Delete</Link></button>
              </div>
           </div>
        </>
    )
   }
}
