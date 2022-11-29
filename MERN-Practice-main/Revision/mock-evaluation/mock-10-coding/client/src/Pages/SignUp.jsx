import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callForRegister } from '../redux/auth/action';

const SignUp = () => {
    const [user, setUser] = useState({})
    const dispatch=useDispatch()
    const navigate = useNavigate();
    // console.log(isAuth)
    const handleChange = (e) => {
        let {name, value} = e.target
        setUser( {
            ...user,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(callForRegister(user))
     navigate("/login")
    }
  return (
    <div>
          <h1>Signup page</h1> 
        <div>
        <input type="text" required name="name" placeholder='name' onChange={handleChange}/><br /><br />
            <input type="text" required name="email" placeholder="email" onChange={handleChange}/><br /><br />
            <input type="text" required name="password" placeholder="password" onChange={handleChange}/><br /><br />
            <button type="submit"  onClick={handleSubmit}>Login</button>
        </div>
    </div>
  )
}

export default SignUp