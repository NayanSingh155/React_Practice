import React from "react";
import style from "./Styles.module.css";
import { AuthContext } from "./AuthContextProvider";
import styled from "styled-components";
import { ThemeContext } from "./ThemeProvider";

let Div = styled.div`
  background: ${(props) => props.color};
  height: 400px;
  color: ${(props) => (props.color === "white" ? "black" : "white")};
  margin: 0;
`;

function Status() {
  const [FormData, setFormData] = React.useState({});
  const { isTheme } = React.useContext(ThemeContext);
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const handleChange = (e) => {
    let inputName = e.target.name;
    setFormData({ ...FormData, [inputName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //    console.log(FormData)
    if (FormData.name === "Muskan Shaw" && FormData.pass == "12345678") {
      // console.log("Yes");
      setIsAuth(!isAuth);
      // console.log(isAuth)
    }
  };
  if (!isAuth) {
    return (
      <Div color={isTheme}>
        <h1>Log In Here</h1>
        <div className={style.form}>
          <form onSubmit={handleSubmit}>
            <label>Enter Your Username</label>
            <br />
            <input type="text" name="name" onChange={handleChange} />
            <br />
            <label>Enter Your Password</label>
            <br />
            <input type="password" name="pass" onChange={handleChange} />
            <br />
            <input type="submit" />
          </form>
        </div>
      </Div>
    );
  } else {
    return (
      <Div>
        <h1>Logged in</h1>
        <button onClick={() => setIsAuth(!isAuth)}>Log Out</button>
      </Div>
    );
  }
}

export default Status;
