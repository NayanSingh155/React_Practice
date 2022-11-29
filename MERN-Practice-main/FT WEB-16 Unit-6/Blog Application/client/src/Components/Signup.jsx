import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import axios from "axios"
const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let inputName = e.target.name;
    setUserData({
      ...userData,
      [inputName]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/users/signup`,userData)
    .then(({data})=>console.log(data))
    .catch((err)=>console.log(err))
    navigate("/login");
  };
  return (
    <>
        <div className="signup">
          <h2>Sign in to your account</h2>

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <div>
                <label>Email address</label>
                
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={userData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  placeholder="Email address"
                />
              </div>
              <br/>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={userData.name}
                  autoComplete="name"
                  onChange={handleChange}
                  required
                  placeholder="Username"
                />
              </div>
              <br/>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                />
              </div>
              <br/>
              <input className="btn" type="submit" value={"Sign Up"} />
            </div>
            <br/>
          </form>
          <div className="text-sm">
            <Link to="/login">Already Have an account?</Link>
          </div>
        </div>
      
    </>
  );
};

export default Signup;
