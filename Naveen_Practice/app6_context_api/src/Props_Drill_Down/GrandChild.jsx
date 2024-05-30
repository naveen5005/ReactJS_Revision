import React from 'react'

const GrandChild = (props) => {
  return (
    <div>
      Welcome to the Grand Child component
      <p>GrandChild component - {props.fname}</p>
    </div>
  )
}

export default GrandChild
