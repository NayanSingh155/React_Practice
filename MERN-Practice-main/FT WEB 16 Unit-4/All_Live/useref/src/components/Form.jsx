import React from 'react'

function Form() {
    const [form ,setForm]=React.useState({
        username:"",
        age:""
    });
    const handleChange=(e)=>{
        ;
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        });
        console.log(form);
       
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
  
    <form onSubmit={handleSubmit}>
        <input type="text" name ="username" 
        placeholder="enter name"
        onChange={handleChange}></input>
        <input type="number"
        onChange={handleChange}
        name="age"
         placeholder="enter age"></input>
         <input type="Submit" placeholder="Enter"/>
    </form>
  )
}

export default Form