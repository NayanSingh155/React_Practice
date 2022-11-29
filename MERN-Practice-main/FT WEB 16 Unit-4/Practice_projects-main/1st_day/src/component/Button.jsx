import React from 'react'

function Button({color, name}) {
  return (
    <div >
    <button style={{backgroundColor:color}} className="btn ">{name}</button>
    </div>
  )
}

export default Button