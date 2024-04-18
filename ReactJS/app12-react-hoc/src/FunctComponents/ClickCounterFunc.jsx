import React from 'react'
import HOCFunc from './HOCFunc'

const ClickCounterFunc = (props) => {
  return (
    <div>
      <h2>Counter is {props.counter}</h2>
      <button type="button" onClick={props.handleIncrement}>Increment</button>
      <button type="button" onClick={props.handleDecrement}>Decrement</button>
      <button type="button" onClick={props.handleReset}>Reset</button>
    </div>
  )
}

export default HOCFunc(ClickCounterFunc)
