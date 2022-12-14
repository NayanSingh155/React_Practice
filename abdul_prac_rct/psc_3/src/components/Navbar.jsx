import React from "react";
import { NavLink } from "react-router-dom";
// import style from "./Navbar.module.css";
// import Navbar from "./c"


const Links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/products", title: "Products" },
    { path: "/users", title: "Users" }
]

const Navbar = () => {
    return (
        <div
            style={{
                display: "flex",
                width: "80%",
                margin: "auto",
                alignItems: "center",
                justifyContent: "space-around",

            }}>
            {Links.map((link) => (
                <NavLink key={link.path} to={link.path}>
                    {link.title}
                </NavLink>
            ))}
        </div>
    )
}

export default Navbar

