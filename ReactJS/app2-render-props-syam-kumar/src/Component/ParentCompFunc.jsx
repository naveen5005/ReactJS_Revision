import React, { useState } from 'react'

const ParentCompFunc = (props) => {
    console.log(props)
  return (
    <div>
      <h2>Welcome to parent func component</h2>
      <p>{props.user} is a bad boy</p>
      <button type="button" onClick={props.handle}>Click</button>
    </div>
  )
}

export default ParentCompFunc
