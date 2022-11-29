import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  InputGroup
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/auth/action";
export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const dispatch = useDispatch()
  const handleChange = (e) => {
    let inputName = e.target.name;
    setData({
      ...data,
      [inputName]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
   e.preventDefault()
   dispatch(login(data))
   navigate("/employees")
  };
  return (
    <Stack>
      <Stack
        minH={"100vh"}
        width="100%"
        background={"black"}
        margin={"auto"}
        display={"flex"}
        justify={"center"}
        alignItems={"center"}
        paddingTop={"2rem"}
      >
        <Stack
          minH={"65vh"}
          width="30%"
          borderRadius={"3xl"}
          margin={"auto"}
          direction={{ base: "column", md: "row" }}
        >
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"3xl"} textAlign={"center"} color={"white"}>
              Log in
            </Heading>

            <form onSubmit={handleSubmit}>
              <FormControl id="email" color={"white"}>
                <FormLabel color={"white"}>Enter Username</FormLabel>
                <Input type="username" name="username"  required onChange={handleChange} />
              </FormControl>
              <FormControl id="password" color={"white"}>
                <FormLabel color={"white"}>Enter Password</FormLabel>
                <InputGroup>
                  <Input type="password" name='password'  required onChange={handleChange} />
                </InputGroup>
              </FormControl>
              <br />
              <Stack spacing={6}>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  background={"blue"}
                  onClick={handleSubmit}
                >
                  Log in
                </Button>
              </Stack>
            </form>
            <Text fontSize="sm" color={"white"} cursor={"pointer"}>
              Don't have account ?
              <Link
                style={{ color: "#3182ce", fontSize: "19px" }}
                onClick={() => navigate("/register")}
              >
                Create an account
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
