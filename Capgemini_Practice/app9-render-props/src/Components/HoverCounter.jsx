import React from 'react'

const HoverCounter = ({counter, handleIncrement, handleDecrement, handleReset}) => {
  return (
    <div>
      <h1>Hover Counter</h1>
      <p>Counter : {counter}</p>
      <button type="button" onMouseOver={handleIncrement}>Increment</button>
      <button type="button" onMouseOver={handleDecrement}>Decrement</button>
      <button type="button" onMouseOver={handleReset}>Reset</button>
    </div>
  )
}

export default HoverCounter
