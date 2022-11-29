import React from 'react'
import {useParams} from "react-router-dom"
function Products() {
    const {id} =useParams();
  return (
    <div>
        <h2>Product details of id:{id}</h2>
    </div>
  )
}

export default Products