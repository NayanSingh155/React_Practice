import React from 'react'
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {ThemeContext }from '../contexts/ThemeContext'
function Navbar() {
  const {handleChangeTheme}=useContext(ThemeContext)
  return (
    <div className="navbar ">
        <Link to='form'>Form</Link>
        <Link to=''>Home</Link>
        <button onClick={()=>handleChangeTheme()}>Change Theme</button>
    </div>
  )
}

export default Navbar