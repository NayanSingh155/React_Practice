import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Regular",
    heading: "Bold",
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Routes />
  </ChakraProvider>,
  document.getElementById("root")
);
