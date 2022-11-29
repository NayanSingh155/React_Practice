import React from 'react'

function Elem(props) {
    const {strMeal,strMealThumb,price,rate,pay}=props
  return (
    <>
         <img src={strMealThumb} alt={strMeal}>

            </img>
          <div>
            <h2>
                   {strMeal}
               </h2>
             <h3>Cost {price}Rs. for one</h3>
             <h4> {rate}*</h4>
             <h4>{pay}</h4>
             </div>
    </>
  )
}

export default Elem