import React from 'react'
import { Link, Outlet} from "react-router-dom"
function Products() {
  return (
    <>
    <div>
        <input type ="search"  placeholder ="Search"/>
    </div>
    <nav className="sec-nav">
      <Link to ="featured" >Featured</Link>
      <Link to ="new" >New</Link>
    </nav>
    {/* outlet is for nested routes we dont have to give full Routes */}
    <Outlet/>
    </>
  )
}

export default Products