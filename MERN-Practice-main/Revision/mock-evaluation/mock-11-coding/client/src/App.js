import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Patient from "./pages/Patient";
import Sign from "./pages/Sign";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Sign/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/:id" element={<Patient/>}/>
      </Routes>
    </div>
  );
}

export default App;
