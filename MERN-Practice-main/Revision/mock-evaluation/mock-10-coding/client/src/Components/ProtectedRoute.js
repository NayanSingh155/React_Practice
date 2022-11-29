import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { loadData } from "../utils/localStorage";
const ProtectedRoute = ({ Component }) => {
    let token = loadData("token");

  const navigate = useNavigate();
  useEffect(() => {
    if (token==="") {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
