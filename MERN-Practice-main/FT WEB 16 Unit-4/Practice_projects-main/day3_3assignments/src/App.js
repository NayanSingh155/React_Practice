
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar.jsx';
import List from './components/List';
import Form from './components/Form';
import styled from 'styled-components';
import {useContext} from 'react';
import {ThemeContext }from './contexts/ThemeContext'
const Wrapper = styled.div`
background-color:${props=>props.bc};
`

function App() {
const {theme} =useContext(ThemeContext)
  return (
  <Wrapper bc={theme} >
    <div className="App">
   
    <Navbar />
 
    <Routes>
      <Route path='/' element={<List/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
    </Routes> 
   
    </div>
    </Wrapper>
  );
}

export default App;
