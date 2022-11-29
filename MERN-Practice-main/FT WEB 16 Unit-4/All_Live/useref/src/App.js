import React from 'react';
import './App.css';
import {useState,useRef} from 'react'
import Form from './components/Form.jsx'

function App() {
  // const inputRef =useRef(null)
  return (
    <div className="App">
     {/* <h1>useref</h1>
  <input ref={inputRef}/>
  <button onClick={()=>{console.log(inputRef.current)}}>
    get Input box
  </button> */}
<Form/>
    </div>
  );
}

export default App;


// const [data,setData]=React.useState({
    
  //     name:"",
  //     email:"",
  //     age:""
    
  // });
  // const handleChange=(e)=>{
  //   const {name,value}=e.target;
  //   setData({...data,[name]:value})

  // }
  // const {email,name,age}=data;
   /*{ <input value={email} name="email" onChange={handleChange}/>
     <br/>
     <input value={name} name="name" onChange={handleChange}/>
     <br/>
     <input value={age} name="age" onChange={handleChange}/>
     <button onClick={()=>console.log(data)}> click</button>} */