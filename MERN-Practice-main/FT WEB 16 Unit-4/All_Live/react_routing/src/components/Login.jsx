import React from 'react'

function Login() {
    const [form,setForm] = React.useState({});
    const handleChange =({target:{name,value}})=>{
setForm({
    ...form,
    [name]: value
})
    }
  return (
    <div>
        <input type ="text"
         onChange={handleChange} 
         name ="email" 
         placeholder ="Enter Email"/>
        <input type ="text"
         onChange={handleChange}
          name ="password"
         placeholder ="Enter Password"/>
         <button >Sign In</button>
    </div>
  )
}

export default Login