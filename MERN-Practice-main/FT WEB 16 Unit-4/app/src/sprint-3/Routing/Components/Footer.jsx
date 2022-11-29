import React from 'react'
import style from "./style.module.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
          <div className={style.nav}>
            <img src="https://th.bing.com/th/id/R.9d44931c77b4e0406d2a361296f321b3?rik=C7YpE8oRdGA21A&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f10%2fShopify_logo_wordmark.png&ehk=eHi71NqrlrPAj0uG3e%2fDamm9Yx%2bPvP33VWdPQezlj%2b8%3d&risl=&pid=ImgRaw&r=0" alt="logo"/>
             <ul>
                <Link to="https://www.facebook.com/shopify " target="_blank"> <li>
                     Facebook
                 </li></Link>
                 <Link to=""> <li>
                     Twitter
                 </li></Link>
                 <Link to=""> <li>
                     Instagram
                 </li></Link>
                 <Link to=""> <li>
                     Linkedin
                 </li></Link>
             </ul>
        </div>
    </div>
  )
}

export default Footer