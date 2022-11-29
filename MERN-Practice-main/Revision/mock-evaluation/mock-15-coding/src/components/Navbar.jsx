import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/admin">Login</Link>
      <Link to="/admin/data">Data</Link>
      <Link to="/admin/report">Report</Link>
    </div>
  );
};

export default Navbar;
