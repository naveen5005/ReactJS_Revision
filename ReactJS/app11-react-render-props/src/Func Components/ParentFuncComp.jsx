import React from 'react'

const ParentFuncComp = (props) => {
    // console.log(props)
  return (
    <div>
      <h2>Welcome to Parent Functional Component</h2>
      <p>Hello, {props.fname}</p>
      <button type="button" onClick={props.handleUserNameChange}>Click Me</button>
    </div>
  )
}

export default ParentFuncComp
