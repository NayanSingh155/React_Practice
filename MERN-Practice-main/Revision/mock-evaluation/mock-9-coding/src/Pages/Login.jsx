import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { login } from "../redux/auth/action";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ id: Math.random() });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    let inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(login(formData));
    navigate("/");
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="teal.400">Log In</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    required
                    name="email"
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    required
                    onChange={handleChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Log In
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Don't have an Account? <Link to="/signup">Sign Up</Link>
      </Box>
    </Flex>
  );
};

export default Login;
