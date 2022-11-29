import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom'
import { getData } from '../redux/data/action';

const Home = () => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token=localStorage.getItem("token")
  // console.log(token);
  const {data}=useSelector((store)=>store.task)
  useEffect(()=>{
    if(token===""){
      return navigate("/login")
    }
  })
  useEffect(()=>{
    dispatch(getData())
    // axios.get("https://mock11muskan.herokuapp.com/patients").then((res)=>console.log(res))
  },[])
  return (
    <div>
          {
            data&&data.map((e)=>(
            <div key={e._id}>
                <h1>Name: {e.name}</h1>
                <p>Age: {e.age}</p>
                <p>Gender:{e.gender}</p>
                
            </div>
           ))
          }
    </div>
  )
}

export default Home