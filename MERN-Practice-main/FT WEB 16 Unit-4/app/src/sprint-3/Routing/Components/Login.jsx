import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import Sign from "./Sign";
import { AuthContext } from "../../Context Api/Auth Context/AuthContextProvider";
function Login() {
  const [FormData, setFormData] = React.useState({});
  const {isAuth, setIsAuth} = React.useContext( AuthContext )
  const navigate = useNavigate();
  const handleChange = (e) => {
    let inputName = e.target.name;
    setFormData({ ...FormData, [inputName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("FormData"));
    if (data.pass == FormData.pass && data.name === FormData.name) {
      alert("Login Success");
      setIsAuth(true)
    }
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <div className={style.form}>
              <h1>Log In </h1>
              <form onSubmit={handleSubmit}>
                <label>Enter Your Username</label>
                <br />
                <input type="text" name="name" onChange={handleChange} />
                <br />
                <label>Enter Your Password</label>
                <br />
                <input type="password" name="pass" onChange={handleChange} />
                <br />
                <input
                  type="submit"
                  onClick={() => {
                    navigate("/");
                  }}
                />
                </form>
              <p>
                New User? <Link to="./signup">Sign Up</Link>
              </p>
            </div>
          </div>
        }
      />
      <Route path="signup" element={<Sign />} />
    </Routes>
  );
}

export default Login;
