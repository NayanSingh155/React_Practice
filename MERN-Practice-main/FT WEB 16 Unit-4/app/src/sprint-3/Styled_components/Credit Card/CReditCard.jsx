import React from 'react'
import DisplayCard from './DisplayCard'
import Card_form from './Card_form'
function CReditCard() {
    const [FormData,setFormData]=React.useState({})
    const addData=(value,name)=> {
        // const input=e.target.name
          setFormData({
                ...FormData,
                [name]:value
            })
        
    }
    const updateFormData=(e)=> {
        // e.preventDefault()
    console.log(FormData)
    
    // console.log(data)
    //  DisplayCard(FormData)

     
    }
  return (
      
    <>
        <DisplayCard e={FormData}/>
        <Card_form FormData={FormData} updateFormData={updateFormData} addData={addData}/>
    </>
  )
}

export default CReditCard