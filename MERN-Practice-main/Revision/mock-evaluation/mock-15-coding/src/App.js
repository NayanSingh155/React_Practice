import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Data from "./pages/Data";
import Report from "./pages/Report";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/data" element={<ProtectedRoute Component={Data} />} />
        <Route path="/admin/report" element={<ProtectedRoute Component={Report} />} />
      </Routes>
    </div>
  );
}

export default App;
