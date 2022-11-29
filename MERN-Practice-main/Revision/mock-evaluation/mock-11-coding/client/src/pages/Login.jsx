import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLoginToken } from "../redux/auth/action";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    axios.post("https://mock11muskan.herokuapp.com/auth/login",data).then((res)=>{
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("user",JSON.stringify(res.data.user))
      navigate("/")
    }).catch((e)=>alert(e.response.data.error))
  };
  return (
    <div>
      <h1>Log In Here</h1>
      <form className="sign" onSubmit={handleSubmit}>
        <div>
          <label>Enter Email</label>
          <input type="email" name="email" required onChange={handleChange} />
        </div>
        <div>
          <label>Enter Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
