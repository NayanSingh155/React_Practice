import {useState} from 'react';

// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const [count,setCount] =useState(0);
    const [isAuth,setIsAuth] = useState(false);
  const add =()=>{
    setCount(1);
    setIsAuth(true);
  }
  const handleAdd =()=>{
    if(count<=6){
      setCount(count+1)
    }
  }
  const handleDec =() =>{
    if(count>0){
      setCount(count-1)
    }else{
      setIsAuth(false)
    }
  }
if(!isAuth){
  return(
<button onClick={add}>Add to cart</button>);
}
else{
  return <>
 
  <div>
     <button onClick={handleDec}>-</button>
     <p className="count-item">{count}</p>
     <button onClick={handleAdd}>+</button>
 </div>
 </>
}
  
 
 
    

   
 
   
};
export default CartButton
