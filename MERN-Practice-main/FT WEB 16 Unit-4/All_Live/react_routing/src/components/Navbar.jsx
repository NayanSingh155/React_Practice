import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <Link to="/" >Home</Link>
        <Link to="/about" style={{margin:"10px"} }>About</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/users" style={{margin:"10px"} }>Users</Link>
    </div>
  )
}

export default Navbar