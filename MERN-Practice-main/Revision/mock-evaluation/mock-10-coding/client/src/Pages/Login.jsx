import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callForLogin } from '../redux/auth/action';

const Login = () => {
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
      dispatch(callForLogin(user))
     navigate("/")
    }
  return (
    <div>
           <h1>Login page</h1> 
        <div>
            <input type="text" required name="email" placeholder="email" onChange={handleChange}/><br /><br />
            <input type="text" required name="password" placeholder="password" onChange={handleChange}/><br /><br />
            <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
    </div>
  )
}

export default Login