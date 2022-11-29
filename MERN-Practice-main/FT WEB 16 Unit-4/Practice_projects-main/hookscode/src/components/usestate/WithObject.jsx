import React ,{useState} from 'react'

function WithObject() {
  const [obj,setObj]=useState({firstname:"",lastname:"",})
  const handleChange =(e)=>{
  const {name,value} = e.target
    setObj({...obj,[name]:value});
    console.log(obj)
  }
  return (
    <div>
    <input type="text" name="firstname" onChange={handleChange} value={obj.firstname}/>
    <input type="text" name="lastname"  onChange={handleChange}/>
 

    </div>
  )
}

export default WithObject