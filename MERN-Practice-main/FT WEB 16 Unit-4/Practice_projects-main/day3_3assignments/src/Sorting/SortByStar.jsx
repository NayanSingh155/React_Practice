import React from 'react'
import data from '../db.json'

const SortByStar = () => {
  const sort =(value)=>{
   let newdata= data.data.filter(el=>el.rating>=value)

    console.log(newdata)
  }
  return (
    <div>
<div>Sort By star</div>
<div>
<button onClick={()=>sort(1)}>*</button>
<button onClick={()=>sort(2)}>**</button>
<button onClick={()=>sort(3)}>***</button>
<button onClick={()=>sort(4)}>****</button>
<button onClick={()=>sort(5)}>*****</button>
</div>

    </div>
  )
}

export default SortByStar