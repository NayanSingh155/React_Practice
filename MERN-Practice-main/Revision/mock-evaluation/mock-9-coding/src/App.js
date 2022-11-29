import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <div>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute Component={Home} />} />
          </Routes>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
