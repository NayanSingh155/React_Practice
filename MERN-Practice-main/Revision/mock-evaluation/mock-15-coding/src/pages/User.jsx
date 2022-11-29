import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../redux/user/action";
const User = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value, name } = e.target;
    if (value) {
      setData({
        ...data,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postData(data));
    setTimeout(() => {
        navigate("/");
    }, 1000);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div>
          <label>Enter Name</label>
          <input type="name" name="name" required onChange={handleChange} />
        </div>
        <div>
          <label>Emter Age</label>
          <input type="age" name="age" required onChange={handleChange} />
        </div>
        <div>
          <label>Enter Gender</label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />
              <label>Male</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />
              <label>Female</label>
            </div>
          </div>
        </div>
        <div>
          <label>Enter Country</label>
          <select onChange={handleChange} name="country" required>
            <option>Select Country</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option select="Pakistan">Paakistan</option>
            <option value="Pakistan" >China</option>
          </select>
        </div>
        <div>
          <label>Select Profession</label>
          <select onChange={handleChange} name="profession" required>
            <option>Select Profession</option>
            <option value="Student">Student</option>
            <option value="Employed">Employed</option>
          </select>
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default User;
