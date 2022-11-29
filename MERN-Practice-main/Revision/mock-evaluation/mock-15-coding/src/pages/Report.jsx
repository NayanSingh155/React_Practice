import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../App.css"
const Report = () => {
  const [st, setSt] = useState(0);
  const [em, setEm] = useState(0);
  useEffect(() => {
    axios
      .get(`https://mock15.herokuapp.com/users/?profession=Student`)
      .then(({ data }) => setSt(data.length));
    axios
      .get(`https://mock15.herokuapp.com/users/?profession=Employed`)
      .then(({ data }) => setEm(data.length));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="table">
        <table>
          <tobody>
            <tr>
              <td>No of Students</td>
              <td>{st}</td>
            </tr>
            <tr>
              <td>No of Employed</td>
              <td>{em}</td>
            </tr>
          </tobody>
        </table>
      </div>
    </div>
  );
};

export default Report;
