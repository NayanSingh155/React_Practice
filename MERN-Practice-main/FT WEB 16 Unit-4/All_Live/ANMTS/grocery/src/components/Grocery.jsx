import React from 'react'
import GroceryInput from './GroceryInput';
 import uuid from 'react-uuid'
function Grocery() {
  const [List ,setList] =React.useState([]);
  const getData = (data) =>{
    console.log(data);
    const payload = {
      title:data,
      status:false,
      id:uuid()
    }
    setList(...List ,payload);
   
  }
  const handletoggle =()=>{
    
  }
  return (
    <div>Grocery
    <GroceryInput getData={getData}/>
    </div>
    
  )
}

export default Grocery