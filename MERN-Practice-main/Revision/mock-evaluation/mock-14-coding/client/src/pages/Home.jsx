import { filter } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { getFilter, getLoading } from "../redux/action";
const Home = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    dispatch(getFilter(data));
    navigate("/quiz")
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Set up your quiz</h1>
        <div>
          <label>Category</label>
          <select required name="category" onChange={handleChange}>
            <option>Select Ctegory</option>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
        <div>
          <label>Difficulty</label>
          <select required name="difficulty" onChange={handleChange}>
            <option>Select Difficulty Level</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <label>Number of questions</label>
          <input type="number" name="num" onChange={handleChange} required />
        </div>
        <input type="submit" value="Start" />
      </form>
    </div>
  );
};

export default Home;
