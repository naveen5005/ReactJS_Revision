import React, { useState } from 'react'

const ChildCompFunc = (props) => {
    console.log(props)
  return (
    <div>
      <hr />
      <h2>Welcome to Child Func Component</h2>
      <p>{props.user} is a good boy</p>
    </div>
  )
}

export default ChildCompFunc
