import React from 'react'
import styled from 'styled-components';
import {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext'

const Wrapper =styled.div`
width: 90%;
background-color:red;
color:blue;
font-size:20px;
margin: auto;
`

function Navbar() {
    const {isAuth,toggleAuth}=useContext(AuthContext)
  return (
      <Wrapper>
    <div>
    <button  onClick ={()=>toggleAuth()}>{!isAuth?"Login":"Logout"}</button>
    </div>
    </Wrapper>
  )
}

export default Navbar