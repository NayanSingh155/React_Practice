import React from 'react'

function Display() {
  const [dataList,setDataList]=React.useState([])
  const get = async () => {
    try{
     let res = await fetch(`http://localhost:8000/formData`)
     let data = await res.json()
        console.log(data)
       
          setDataList(data)
        
        console.log(dataList)
    }
    catch(e){
      console.log(e)
    }
     }
     React.useEffect(()=>{
 
        get()

   },[])
   return (
     <>
       {
         dataList.map(el=>{
           return(
             <div key={el.id}>
              <h3>Name:{el.name}</h3>
              <h3>Age:{el.age}</h3>
              <h3>Salary:{el.salary}</h3>
              <h3>Address:{el.address}</h3>
              <h3>Department:{el.department}</h3>
              <h3>Marital Status:{el.marital_status}</h3>
             </div>
           )
         })
       }
     </>
   )
}

export default Display