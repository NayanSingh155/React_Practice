import React from 'react'
import {Link} from 'react-router-dom'
function Users() {
  return (
    <div>{[1,2,3,4].map((e)=>{
        return(
       <div style ={{margin:"10px"}}>
       <Link to= {`/users/${e}`}>User {e}</Link>
       </div>)
    })}</div>
    
  )
}

export default Users