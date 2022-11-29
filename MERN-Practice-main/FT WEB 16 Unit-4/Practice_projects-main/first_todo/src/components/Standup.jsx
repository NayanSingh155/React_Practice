import React from 'react'

function Standup() {
    const [count,setCount] =React.useState(0);
    const handleChange =(value)=>{
        setCount(count+value)
    }
    const handleLogin =()=>{
        setisAuth(true);
    }
    const [isAuth,setisAuth] = React.useState(false);
    if(!isAuth){
        return(
            <div>
                Not Authenticated<button onClick={handleLogin}>Login</button>
            </div>
        )
    }
  return (
    <div>
        this is our  count: {count}
        <button onClick={()=>handleChange(1)} >+</button>
        <button onClick={()=>handleChange(-1)} >-</button>
    </div>
  )
}

export default Standup