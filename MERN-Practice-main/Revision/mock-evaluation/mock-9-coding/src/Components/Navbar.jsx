import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink as DomLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Links = [
  { name: "Home", active: true, to: "/" },
  { name: "Login", active: false, to: "/login" },
  { name: "Sign Up", active: false, to: "/signup" },
];

const mobileLinks = [
  { name: "Home", active: true, to: "/" },
  { name: "Login", active: false, to: "/login" },
  { name: "Sign Up", active: false, to: "/signup" },
];

const NavLink = ({ children }) => (
  <DomLink
    to={children.to}
    className={(navData) => (navData.isActive ? "active" : "link")}
  >
    <Text
      px={2}
      py={1}
      fontSize="sm"
      transition="color 600ms ease"
      _hover={{
        textDecoration: "none",
        color: "#fff",
      }}
    >
      {children.name}
    </Text>
  </DomLink>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Box
      width={"100%"}
      position={"fixed"}
      top={"0px"}
      right={"0px"}
      left={"0px"}
      zIndex={7}
      backgroundColor={"#333"}
      boxShadow={
        "rgba(50, 40, 90, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
      }
      color={"#fff"}
    >
      <Box maxW={"1260px"} m={"auto"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack
            spacing={8}
            w={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <DomLink style={{ border: "none" }} to="/"></DomLink>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.name}>{link}</NavLink>
              ))}
            </HStack>
            <Flex alignItems={"center"}>
              <Menu backgroundColor={"#202124"}>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  display={{ base: "none", md: "flex" }}
                  minW={0}
                ></MenuButton>
              </Menu>
            </Flex>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              marginRight={"12px"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box backgroundColor="#202124" pb={4} display={{ md: "none" }}>
            <Stack backgroundColor="#202124" as={"nav"} spacing={4}>
              {mobileLinks.map((link) => (
                <NavLink key={link.name}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
