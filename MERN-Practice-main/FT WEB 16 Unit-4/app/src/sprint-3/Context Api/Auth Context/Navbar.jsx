import React from "react";

import { AuthContext } from "./AuthContextProvider";
import { ThemeContext } from "./ThemeProvider";
import styled from "styled-components";
let Div = styled.div`
  background: ${(props) => props.color};
  height: 80px;
  color: ${(props) => (props.color === "white" ? "black" : "white")};
`;
const Ul = styled.ul`
  float: right;
  display: flex;
  list-style-type: none;
  margin-right: 70px;
  gap: 20px;
`;
function Navbar() {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const { toggleTheme, isTheme } = React.useContext(ThemeContext);
  // console.log(isAuth)

  return (
    <Div color={isTheme}>
      <Ul>
        <li onClick={() => toggleTheme()}>
          {isTheme == "white" ? "Dark" : "Light"}
        </li>
        <li onClick={() => setIsAuth(!isAuth)}>
          {isAuth ? "Log out" : "Log in"}
        </li>
      </Ul>
    </Div>
  );
}

export default Navbar;
