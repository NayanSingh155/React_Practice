import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import "./Grocerdetails.css"

const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */
            data.map((item)=>{
               return <GroceryItem key ={item.id} {...item}/>
            })
            }
        </div>
        </>
    )
}
export default GroceryDetails