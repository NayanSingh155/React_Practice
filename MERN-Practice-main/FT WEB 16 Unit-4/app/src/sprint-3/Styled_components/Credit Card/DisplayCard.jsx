import React from 'react'
import {Card,Span,P1,Img,Div2} from "./Styled-components"
function DisplayCard(props) {
    let e = props.e;
    console.log("DisplayCrad",e)
  return (
   <Card>
      <Span>VISA</Span>
      <div>
      <Img src="https://www.clipartkey.com/mpngs/m/159-1591130_card-chip-png-sim-card-chip-png.png" alt="chip"/>

      </div>
      <P1>{e.number}</P1>
      <Div2>
          <div >
              
          <label style={{fontSize:"10px"}}>CARDHOLDER</label>
          <p>{e.name}</p>
          </div>
          <div >
              
              <label style={{fontSize:"10px"}}>EXPIRY DATE</label>
              <p>{e.month}/{e.year}</p>
              </div>
              <div >
              
              <label style={{fontSize:"10px"}}>CVV</label>
              <p>{e.cvv}</p>
              </div>
      </Div2>
   </Card>
  )
}

export default DisplayCard