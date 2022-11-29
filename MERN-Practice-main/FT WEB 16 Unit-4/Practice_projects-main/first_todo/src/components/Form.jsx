import React from 'react'
import {useState} from 'react';
const init={
    name:"",
    email:"",
    password:""
}
function Form() {
    const [state,setState] = useState(init);
    const {name,email,password} = state;
    const handleSubmit =(e)=>{
e.preventDefault();
console.log(state);

    }
    const handleChange =(e)=>{
        const {name,value} =e.target
        setState({
            ...state,
            [name]:value
        })
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
       <input type="text" placeholder="enter name" name="name"onChange={handleChange} value={name}/>
       <input type="text" placeholder="enter email" name="email"onChange={handleChange} value={email}/>
       <input type="text" placeholder="enter password" name="password"onChange={handleChange} value={password}/>
       <input type="submit"/>
       </form>
    </div>
  )
}

export default Form