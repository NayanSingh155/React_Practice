import React from 'react'
import {Name} from './Person.type'
type PersonListProps ={
    names:Name[]
}
function PersonList(props:PersonListProps) {
  return (
    <div>
       {props.names.map((name) => { return <h2>{name.first}+{name.last}</h2>})}
    </div>
  )
}

export default PersonList