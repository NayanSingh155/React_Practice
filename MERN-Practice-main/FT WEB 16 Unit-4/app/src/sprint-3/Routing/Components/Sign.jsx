import React from 'react'
import style from "./style.module.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Sign() {
    const [FormData,setFormData]=React.useState({})
    const navigate=useNavigate()
    const handleChange=(e)=>{
        let inputName=e.target.name;
          setFormData({...FormData,
             [inputName]:e.target.value
          })
         }
    const handleSubmit=(e)=> {
       e.preventDefault()
        // console.log(FormData)
    localStorage.setItem("FormData",JSON.stringify(FormData))
       
    }
  return (
    <div>
         <div className={style.form}>
        <h1>Sign In </h1>
        <form onSubmit={handleSubmit}>
          <label>Enter Username</label>
        <br/>
            <input type="text" name="name" onChange={handleChange} />
            <br/>
            <label>Enter Password</label>
        <br/>
            <input type="password" name="pass"  onChange={handleChange}/>
            <br/>
          
            <label>Confirm Password</label>
        <br/>
            <input type="password" name="pass"  onChange={handleChange}/>
            <br/>
            <input type="submit" onClick={()=>{navigate("")}} />
        </form>
        <p>Already Exists? <Link to="/login">Log In</Link></p>
    </div>
    </div>
  )
}

export default Sign