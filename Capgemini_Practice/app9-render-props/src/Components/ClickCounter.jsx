import React from 'react'

const ClickCounter = ({counter, handleIncrement, handleDecrement, handleReset}) => {
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

export default ClickCounter
