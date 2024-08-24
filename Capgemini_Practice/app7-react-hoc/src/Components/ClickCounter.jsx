import React from 'react'
import HOC from './HOC'

const ClickCounter = ({counter,handleIncrement,handleDecrement,handleReset}) => {
  return (
    <div>
      <h1>Click Counter</h1>
      <p>Counter : {counter}</p>
      <button type="button" onClick={handleIncrement}>Increment</button>
      <button type="button" onClick={handleDecrement}>Decrement</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default HOC(ClickCounter)
