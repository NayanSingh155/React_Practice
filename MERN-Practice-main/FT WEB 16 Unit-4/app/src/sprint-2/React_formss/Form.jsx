import React from 'react'
import style from "./form.module.css"
function Form() {
    const [FormData,setFormData]=React.useState({})
    const post=async ()=> {
        try{
        let res = await fetch(`http://localhost:8000/formData`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(FormData)
        })
        }
        catch(e){
            console.log(e)
        }
    }
        
    const handleChange=(e)=> {
        const input=e.target.name
       
        
            setFormData({
                ...FormData,
                [input]:e.target.value
            })
        
     
    }
   
    const handleSubmit=(e)=> {
        e.preventDefault()
    // console.log(FormData)
   post()
    // console.log(data)
    
     
    }
  return (
    <div className={style.box}>
    <h1>
        Employee Details
    </h1>
   <form onSubmit={handleSubmit}>
   <label>Enter Name</label>
    <br/>
   <input type="name" name="name" placeholder='Enter Name'  onChange={handleChange}/>
   <br/>
   <label>Enter Age</label>
   <br/>
   <input type="age" name="age" placeholder='Enter Age'  onChange={handleChange}/>
   <br/>
   <label>Enter Address</label>
   <br/>
   <input type="addess" name="address" placeholder='Enter Address'  onChange={handleChange}/>
   <br/>
   <label>Enter Department</label>
   <br/>
    <select name='department' onChange={handleChange}>
        <option value="Finance">Finance</option>
        <option value="Management">Management</option>
        <option value="Marketing">Marketing</option>
    </select>
   <br/> 
   <label>Enter Salary</label>
   <br/>
   <input type="salary" name="salary" placeholder='Enter Salary In Rs.'  onChange={handleChange}/>
   <br/>
   <label>Marital Status</label>
   <br/>
   <div style={{display:"flex"}}><input style={{width:"30px"}} type="radio"  name="marital_status" onChange={handleChange} value="yes"/>Married</div>
   

   <div style={{display:"flex"}}><input style={{width:"30px"}} type="radio" name="marital_status" onChange={handleChange} value="no"/>Unmarried</div>

  
  
 
   <input type="submit"/>
   </form>


    </div>
  )
}

export default Form