import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { isAuth, userData } = useSelector((state) => state.auth);
  console.log(isAuth, userData);
  return <div>
  </div>;
};

export default Home;
