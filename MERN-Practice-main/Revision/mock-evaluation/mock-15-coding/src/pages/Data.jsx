import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountry,
  getDataUsers,
  getFemale,
  getMale,
  getName,
} from "../redux/admin/action";
import "../App.css";
import Card from "../components/Card";
const Data = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const { dLoading, dError, data } = useSelector((store) => store.admin);
  useEffect(() => {
    dispatch(getDataUsers());
  }, []);
  const handleGender = (e) => {
    let val = e.target.value;
    if (val === "Female") {
      dispatch(getFemale());
    } else if (val === "Male") {
      dispatch(getMale());
    }
  };
  const handleCountry = (e) => {
    let val = e.target.value;
    dispatch(getCountry(val));
  };
  return (
    <div>
      <Navbar />
      <div>
        {dLoading ? (
          <>
            <div className="spinner-container">
              <div className="loading-spinner"></div>
            </div>
          </>
        ) : dError ? (
          <>Something Went Wrong...</>
        ) : (
          <>
            <div>
              <input
                type="name"
                name="name"
                placeholder="Search By name"
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                onClick={() => {
                  dispatch(getName(value));
                }}
              >
                Search
              </button>
              <select onChange={handleCountry}>
                <option>Filter By Country</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
                <option value="China">China</option>
                <option value="Pakistan">Pakistan</option>
              </select>
              <select onChange={handleGender}>
                <option>Filter By Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div className="grid">
              {data.map((e, i) => (
                <Card {...e} key={e.id} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Data;
