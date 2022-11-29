import React from 'react'
import data from "./data.json"
import style from "./r.module.css"
import Elem from './Elem.jsx'
function Restaurant() {
    // console.log(data)
   let handleRate = (num)=> {
         
    }
  return (
      <>
    <h1>Restaurant</h1>
   <div className={style.btn}>
   <button>One Star</button>
   <button>Two Star</button>
   <button>Three Star</button>
   <button>Four Star</button>
   </div>

    <div className={style.Box}>
    
    {
        data.map(el => {
          
            return (
            <div className={style.child}>

            <Elem {...el}/>

                 
            </div>
                
            )
        })
    }
    </div>
    </>
  )
}

export default Restaurant