import React from 'react'
import HOC_Func_Comp from './HOC_Func_Comp'

const HoverCounter = (props) => {
    console.log(props)
  return (
    <div>
      <hr />
      <h2>Welcome to the Hover counter functional Component</h2>
      <p>Hover Counter value is {props.counter}</p>
      <button type="button" onMouseOver={props.handleIncrement}>Increment</button>
      <button type="button" onMouseOver={props.handleDecrement}>Decrement</button>
      <button type="button" onMouseOver={props.handleReset}>Reset</button>
    </div>
  )
}

export default HOC_Func_Comp(HoverCounter);
