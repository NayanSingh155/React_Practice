import React from 'react'
import style from "./style.module.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context Api/Auth Context/AuthContextProvider'
function Nav() {
    const {isAuth, setIsAuth} = React.useContext( AuthContext )
  return (
    <div>
        <div className={style.nav}>
            <img src="https://th.bing.com/th/id/R.9d44931c77b4e0406d2a361296f321b3?rik=C7YpE8oRdGA21A&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f10%2fShopify_logo_wordmark.png&ehk=eHi71NqrlrPAj0uG3e%2fDamm9Yx%2bPvP33VWdPQezlj%2b8%3d&risl=&pid=ImgRaw&r=0" alt="logo"/>
             <ul>
             <Link to="/" > <li>
                     Home
                 </li></Link>
                <Link to="/faq" > <li>
                     FAQ
                 </li></Link>
                 <Link to="/contact" > <li>
                     Contact Us
                 </li></Link>
                 <Link to="/about" > <li>
                     About
                 </li></Link>
                 <Link to="/cart" > <li>
                    Cart
                 </li></Link>
                 <Link to="/login" > <li>
                  <button onClick={()=> setIsAuth(false)}> {isAuth?"Log Out":"Log In"}</button> 
                 </li></Link>
             </ul>
        </div>
       
    </div>
  )
}

export default Nav