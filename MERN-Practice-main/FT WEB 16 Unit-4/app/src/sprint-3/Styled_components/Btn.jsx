import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
 width:30%;
 margin:auto;
 
  margin-top:30px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:15px;
`;
const Btn1 = styled.button`
background:blue;
color:white;
`
const Btn2 = styled.button`
border:dashed

`
const Btn3 = styled.button`
border:none;
background:none;

`
const Btn4 = styled.a`
text-decoration:none;
color:blue;

`
function Btn() {
  return (
    <Wrapper>
    <Btn1>Primary Button</Btn1>
    <button>Default Button</button>
    <Btn2>DAshed Button</Btn2>
    <Btn3>Text Button</Btn3>
    <Btn3><Btn4>Link Button</Btn4></Btn3>
    </Wrapper>
  )
}

export default Btn


