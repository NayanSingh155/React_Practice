import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div>
        <button onClick={() => navigate("/admin")}>Admin Section</button>
      </div>
      <div>
        <button onClick={() => navigate("/user")}>User Section</button>
      </div>
    </div>
  );
};

export default Home;
