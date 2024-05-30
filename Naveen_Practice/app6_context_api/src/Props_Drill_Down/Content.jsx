import React from 'react'
import Child from './Child'

const Content = (props) => {
  return (
    <div>
      Welcome to the Content component
      <p>Content component - {props.fname}</p>
      <hr />
      <Child fname = {props.fname}/>
    </div>
  )
}

export default Content
