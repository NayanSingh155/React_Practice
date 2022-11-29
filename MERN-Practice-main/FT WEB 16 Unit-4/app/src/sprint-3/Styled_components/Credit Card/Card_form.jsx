import React from 'react'
import DisplayCard from './DisplayCard.jsx'
import {Input1,Form,Div,Div1,Input2,P,Btn} from "./Styled-components.jsx"
function Card_form({FormData,updateFormData,addData}) {
   const handleSubmit=(e)=>{
       e.preventDefault()
       updateFormData()
   }
  const handleChange=(e)=> {
 let inputName=e.target.name;
   let value=e.target.value
   addData(value,inputName)

  }
  return (
  
        <Div>
     <h1>
         Payment Details
     </h1>
     <Form onSubmit={handleSubmit}>
         <label>
             CARDHOLDER NAME
         </label>
         <br/>
      <Input1 type="text" name="name" placeholder="Enter NAme" onChange={handleChange}></Input1>
      <br/>
      <label>
             CARD NUMBER
         </label>
         <br/>
      
      <Input1 type="card-number" name="number" onChange={handleChange} placeholder="Enter CArd No."></Input1>
      <br/>
      <Div1>
          <div>
              <label>
                  Expiry Month
              </label>
              <br/>
              <Input2 type="number" name="month" placeholder='Month' onChange={handleChange}>

              </Input2>
          </div>
          <div>
              <label>
                  Expiry
                   Year
              </label>
              <br/>
              <Input2 type="year" name="year" onChange={handleChange} placeholder='Exp. Year'>

              </Input2>
          </div>
          <div>
              <label>
                 CVV
              </label>
              <br/>
              <Input2 type="cvv" name="cvv" onChange={handleChange} placeholder='Enter CVV'>

              </Input2>
             
          </div>
      </Div1>
      <P>Payment Amount 12300 Rs.</P>
      <Btn type="submit" placeholder='PAY'></Btn>
     </Form>

    





    </Div>
   
  
  )
}

export default Card_form