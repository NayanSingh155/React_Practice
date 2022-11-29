import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Styles/Nav.module.css"
const Navbar = () => {
  return (
    <div>
        <nav className={style.nav} >
            <Link to="/">All</Link>
            <Link to="/html">HTML</Link>
            <Link to="/css">CSS</Link>
            <Link to="/js">JavaScript</Link>
        </nav>
    </div>
  )
}

export default Navbar