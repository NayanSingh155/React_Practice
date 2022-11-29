import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

// import { signup } from '../../redux/auth/action';

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Box,
  InputGroup,
  HStack,
  InputRightElement,
  useToast,
  Progress,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/auth/action";

const Register = () => {
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let inputName = e.target.name;
    setData({
      ...data,
      [inputName]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(data));
    navigate("/login")
  };

  return (
    <div>
      <Flex
        minH={"100vh"}
        width="100%"
        background={"black"}
        margin={"auto"}
        display={"flex"}
        justify={"center"}
        alignItems={"center"}
        paddingTop={"3rem"}
      >
        <Flex
          minH={"80vh"}
          color={"white"}
          align={"center"}
          justify={"center"}
          boxShadow={"lg"}
          width="60%"
          borderRadius={"3xl"}
          direction={{ base: "column", md: "row" }}
          flexDirection={"row-reverse"}
        >
          <Stack
            flex={1}
            spacing={2}
            mx={"auto"}
            maxW={"lg"}
            py={1}
            px={5}
            height="100%"
          >
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} mt={4} textAlign={"center"}>
                Register
              </Heading>
            </Stack>

            <Box rounded={"lg"} p={8}>
              <Stack spacing={4}>
                <form onSubmit={handleSubmit}>
                  <HStack>
                    <Box>
                      <FormControl id="ame" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="mobile" isRequired>
                        <FormLabel>Mobile</FormLabel>
                        <Input
                          type="number"
                          name="mobile"
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" name="email" onChange={handleChange} />
                  </FormControl>
                  <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      required
                    />
                  </FormControl>

                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        required
                        type="password"
                        name="password"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl id="description" isRequired>
                    <FormLabel>description</FormLabel>
                    <Input
                      type="text"
                      required
                      name="description"
                      onChange={handleChange}
                    />
                  </FormControl>

                  <Stack spacing={10} pt={2}>
                    <Button
                      type="submit"
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue"}
                      color={"white"}
                      _hover={{ bg: "blue.500" }}
                      onClick={handleSubmit}
                    >
                      Sign up
                    </Button>
                  </Stack>
                </form>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link color={"blue.400"}  onClick={() => navigate("/login")}>
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </div>
  );
};

export default Register;
