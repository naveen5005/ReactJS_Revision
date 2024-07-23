import React from 'react'
import HOC_Comp from './HOC_Comp'

const ClickCounter = (props) => {
    console.log(props)
  return (
    <div>
      <p>Click Counter is : {props.counter}</p>
      <button type="button" onClick={props.handleIncrement}>Click Increment</button>
      <button type="button" onClick={props.handleDecrement}>Click Decrement</button>
      <button type="button" onClick={props.handleReset}>Click Reset</button>
    </div>
  )
}

export default HOC_Comp(ClickCounter)
