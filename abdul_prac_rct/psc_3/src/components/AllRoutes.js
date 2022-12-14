import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Products from "../Pages/Products";
import SingleUsers from "../Pages/SingleUsers";
import Users from "../Pages/Users";
import NotFound from "../Pages/NotFound";

const AllRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/products/:product_id" element={<Products />}></Route>
            <Route path="/singleusers" element={<SingleUsers />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    );
}

export default AllRoutes;
