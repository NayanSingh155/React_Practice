import React from 'react'
type ButtonProp ={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number) => void
}
function Button(props:ButtonProp) {
  return (
    <button onClick={event=>props.handleClick(event,1)}>click </button>
  )
}

export default Button