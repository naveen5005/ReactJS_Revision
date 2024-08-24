import React from 'react'
import { useContext } from 'react'
import { Context } from './ReusableComp'

const ClickCounter = () => {
   const {counter, handleIncrement, handleDecrement, handleReset} = useContext(Context);
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
