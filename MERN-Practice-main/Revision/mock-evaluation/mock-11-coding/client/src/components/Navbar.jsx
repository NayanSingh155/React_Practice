import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
const Navbar = () => {
  const [auth,isAuth]=useState(false)
  const token=localStorage.getItem("token")
  useEffect(()=>{
    if(token!==""){
      isAuth(true)
    }
  })
  return (
    <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">{auth?"Log Out":"Log In"}</Link>
        <Link to="/">Home</Link>
    </div>
  )
}

export default Navbar