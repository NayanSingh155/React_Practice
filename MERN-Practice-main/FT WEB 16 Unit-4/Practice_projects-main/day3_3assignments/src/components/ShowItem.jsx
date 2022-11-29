import React from 'react'
import "./ShowItem.css";
function ShowItem({item}) {
    
  return (
    <div className="showitemContainer" >

<img src={item.image} alt="aa"/>
    
    <h4 className="name">{item.Restarunt_name}</h4>
    <h4>Dishes --  {item.dishes_name}</h4>
    <h4 className="rating">{item.rating} 🌟 </h4>
 
    <h5 className="reviews">{item.reviews}</h5>
    <h5 className="votes">{item.votes}</h5>
    <h4 className="cost_for_two"> Price For Two -- {item.cost_for_two}</h4>
    <h5 className="min_limit_of_order">{item.Min_limit_of_order}</h5>
    <h5 className="payment_methods">{item.payment_methods}</h5>
    

    </div>
  )
}

export default ShowItem