import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Form } from "./EditBookData";

// add input styling
export const Input = styled.input`
 
`;


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/books";
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          data-testid="login-form-email"
          placeholder="Enter Email"
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          data-testid="login-form-password"
          placeholder="Enter Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input value = "Login" type={"submit"} data-testid="login-form-submit" />
      </Form>
    </>
  );
};
