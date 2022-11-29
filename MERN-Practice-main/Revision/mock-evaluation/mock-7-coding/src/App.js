import {  Route, Routes } from 'react-router-dom';
import './App.css';
import All from './Pages/All';
import CSS from './Pages/CSS';
import HTML from './Pages/HTML';
import JS from './Pages/JS';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
        <Routes>
             <Route path="/"  element={<All/>} />
             <Route path="/html" element={<HTML/>}/>
             <Route path="/css" element={<CSS/>}/>
             <Route path='/js' element={<JS/>}/>
        </Routes>
    </div>
  );
}

export default App;
