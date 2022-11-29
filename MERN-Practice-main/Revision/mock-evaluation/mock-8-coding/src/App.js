import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Employees from './Pages/Employees';
import Employee from './Pages/Employee';
import Create from './Pages/Create';

function App() {
  return (
   <ChakraProvider>
    <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/employees" element={<Employees/>}/>
      <Route path="/employees/:id" element={<Employee/>}/>
      <Route path="/employees/create" element={<Create/>}/>
     </Routes>
    </div>
   </ChakraProvider>
  );
}

export default App;
