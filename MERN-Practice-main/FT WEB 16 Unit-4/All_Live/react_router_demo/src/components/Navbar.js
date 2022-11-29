import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const navlinkStyles=({isActive})=>{ 
        return { 
            fontWeight:isActive ? 'bold' : 'normal', 
            textDecoration: isActive?'none':" underline"
        }
    }
  return (
   <nav>
   {/* inLink or navlink put to and the address wher you have to go so route means change
    in Url and link means where you have to go when you are clicking on it */}
       <NavLink style={navlinkStyles} to ='/'>Home</NavLink>
       <NavLink style={navlinkStyles} to ='/about'>About</NavLink>
       <NavLink style={navlinkStyles} to ='/products'>Products</NavLink>
   </nav>
  )
}

export default Navbar