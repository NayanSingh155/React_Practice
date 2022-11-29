import React from 'react';

import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading'
import Oscar from './components/Oscar';
import Button from './components/Button'
import Input from './components/Input';
import Container from './components/Container';
import User from './components/User';
function App() {
  const  personName ={
    first:"Bruce",
    last:"Smith"
  }
  const nameList =[{
    first:"Bruce",
    last:"Smith"
  },{
    first:"Bruce",
    last:"S"
  },{
    first:"Bruce",
    last:"Sm"
  }]
  return (
    <div className="App">
    {/* <Greet name="anmol" msg={10} isLoggedIn={true} />
    <Person name={personName}/>
    <PersonList names={nameList}/>
    <Status status='error'/> */}
    {/* <Oscar><Heading> oscar goes to Anmol</Heading></Oscar> */}
    {/* <Button handleClick={(event,id)=>{
      console.log("Anmol" ,event,id)
    }}/> */}
    {/* <Input value='' handleChange={(event)=>console.log(event)}/> */}
    {/* <Container styles={{border: '1px solid'}}/> */}
    <User/>
    </div>
  );
}

export default App;
