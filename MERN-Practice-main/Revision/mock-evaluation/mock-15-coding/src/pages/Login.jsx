import React from "react";
import "../App.css";
import { getLoginToken } from "../redux/admin/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading}=useSelector((store)=>store.admin)
  return (
    <div className="home">
      <button
        onClick={() => {
          dispatch(getLoginToken());
          setTimeout(()=>{
            navigate("/admin/data");
          },1000)
        }}
      >
       {loading?<>Logging in...</>:<>Login</> }
      </button>
    </div>
  );
};

export default Login;
