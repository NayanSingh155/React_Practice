import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
        {/* keep all the NavLinks here */}
       <NavLink to="/">Home</NavLink>
       <NavLink to="/about">About</NavLink>
       <NavLink to="/books">Books</NavLink>
       <NavLink to="/login">Login</NavLink>
      </nav>
    </>
  );
};
