import React from 'react'
import GrandChild from './GrandChild'

const Child = (props) => {
  return (
    <div>
      Welcome to the child component
      <p>Child component - {props.fname}</p>
      <hr />
      <GrandChild fname = {props.fname}/>
    </div>
  )
}

export default Child
