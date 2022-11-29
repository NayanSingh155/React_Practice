import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.div`
  display: grid;
  grid-template-columns: 10% 10%;
  gap: 30%;
  border: 1px solid;
  border-top: none;
  a {
    text-decoration: none;
    margin-left: 180px;
    font-size: 25px;
    font-weight: bold;
  }
`;
function Navbar() {
  return (
    <Nav>
      <div>
        <Link to="/">Stopwatch</Link>
        <Link to="/timer">Timer</Link>
      </div>
    </Nav>
  );
}

export default Navbar;
