import React from 'react'
import {useState ,useEffect} from 'react';
function Form() {
  const [form,setForm] =useState({});
  // useEffect(()=>{

  //       },[]);


const getdata =()=>{
  fetch ("http://localhost:3004/data",{
    method:"POST",
    body:JSON.stringify(form),
    headers:{
        "content-type": "application/json"
    }
})
}
  const handleChange=(e) => {
const {name,value} = e.target;
setForm({...form,[name]:value});


  }
  return (
    <div>
    

    <div className="form_container"> 
    
      <div >
        <input type="Number" 
        placeholder="Id" 
        name = "id" 
       
        onChange={handleChange}/>
        <br/>
        <input type="Number" 
        placeholder="cost_for_two" 
        name = "cost_for_two" 
       
        onChange={handleChange}/>
        <br/>

       <input type="text" 
        placeholder="Restarunt_name" 
        name = "Restarunt_name" 
       
        onChange={handleChange}/>
         <br/>
        <input type="text" 
        placeholder="dishes_name" 
        name = "dishes_name" 
       
        onChange={handleChange}/>
         <br/>
        
        <input type="Number" 
        placeholder="rating" 
        name = "rating" 
       
        onChange={handleChange}/>
         <br/>
        <input type="Number" 
        placeholder="reviews" 
        name = "reviews" 
       
        onChange={handleChange}/>
         <br/>
        <input type="Number" 
        placeholder="votes" 
        name = "votes" 
       
        onChange={handleChange}/>
         <br/>
        <input type="Number" 
        placeholder="Min_limit_of order" 
        name = "Min_limit_of order" 
       
        onChange={handleChange}/>
         <br/>
        <input type="Number" 
        placeholder="min_time_to cook" 
        name = "min_time_to cookr" 
       
        onChange={handleChange}/>
         <br/>
           <input type="text" 
        placeholder="payment_methods" 
        name = "payment_methods" 
       
        onChange={handleChange}/>
         <br/>
         <input type="url" 
        placeholder="image" 
        name = "image" 
       
        onChange={handleChange}/>
         <br/>
<button onClick={()=>getdata()} className="submit">Submit</button>

        
        
      </div>
      </div>
      
    </div>
  )
}

export default Form