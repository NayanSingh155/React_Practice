
import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx'
import Products from './components/Products.jsx';
import Users from './components/Users.jsx';
import Login from "./components/Login.jsx";
import {Route ,Routes} from "react-router-dom";
import Userdetails from './components/Userdetails.jsx'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element ={ <Home/>}>
   
    </Route>
    <Route path="/about" element ={ <About/>}>
   
    </Route>
    <Route path="/Contact" element ={ <Contact/>}>
   
   </Route>
   <Route path="/product/:id" element ={ <Products/>}></Route>
   
   <Route path="/users" element ={ <Users/>}></Route>
   <Route path="/users/:userid" element ={ <Userdetails/>}></Route>
   <Route path="/login" element ={ <Login/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
