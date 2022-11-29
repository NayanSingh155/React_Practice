import React from 'react'
import Cart from './Cart'
import {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext"
function Navbar() {
    const {theme,toggleTheme} =useContext(ThemeContext)
  return (
    <div>
    <div>Navbar theme is {theme}</div>
    <button onClick={toggleTheme}>Change theme</button>
        <Cart/>
    </div>
  )
}

export default Navbar