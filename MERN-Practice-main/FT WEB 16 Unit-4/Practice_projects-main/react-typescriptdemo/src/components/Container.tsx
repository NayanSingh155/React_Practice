import React from 'react'
type containerStyleProp={
    styles:React.CSSProperties
}
function Container(props:containerStyleProp) {
  return (
    <div style ={props.styles}>
        Text Content Goes here
    </div>
  )
}

export default Container