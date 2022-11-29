// reusable card component
import CartButton from "./CartButton"
const GroceryItem = ({title,mrp,imgURL,sellingPrice,discount}) => {
 
  return <>
    <div style={{border: '1px solid',
    backgroundColor: 'aqua'
    
    }}> 
    <span>{discount}</span>
    <img src={imgURL}/>
    <h3>{title}</h3>
    <h3>{mrp}</h3>
    <h3>{sellingPrice}</h3>
   <CartButton/>
    </div>
  </>;
};
export default GroceryItem;
