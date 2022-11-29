import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { callForRegister } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";
const Sign = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [data,setData]=useState({})
    const handleChange=(e)=>{
       const {name,value}=e.target
       setData({...data,[name]:value})
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
    //   console.log(data)
      dispatch(callForRegister(data))
      navigate("/login")

    }
  return (
    <div>
      <h1>Sign Up Here</h1>
      <form className="sign" onSubmit={handleSubmit}>
        <div>
          <label>Enter Name</label>
          <input type="name" name="name" required onChange={handleChange} />
        </div>
        <div>
          <label>Enter Email</label>
          <input type="email" name="email" required onChange={handleChange}/>
        </div>
        <div>
          <label>Enter Password</label>
          <input type="password" name="password" required onChange={handleChange}/>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Sign;
