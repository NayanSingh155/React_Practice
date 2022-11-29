import React from 'react'
import {PersonType }from './Person.type'
function Person(props:PersonType) {
  return (
    <div>{props.name.first}{props.name.last}</div>
  )
}

export default Person