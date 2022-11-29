import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ Component }) => {
  const { isAuth } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
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
