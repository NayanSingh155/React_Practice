import React from 'react'
type headProp ={children:string}
function Heading(props:headProp) {
  return (
    <div>{props.children}</div>
  )
}

export default Heading