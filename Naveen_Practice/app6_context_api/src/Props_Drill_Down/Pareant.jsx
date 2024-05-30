import React from 'react'
import Content from './Content'

const Pareant = (props) => {
  return (
    <div>
      Welcome to the parent component
      <p>parent component - {props.fname}</p>
      <hr />
      <Content fname = {props.fname}/>
    </div>
  )
}

export default Pareant
