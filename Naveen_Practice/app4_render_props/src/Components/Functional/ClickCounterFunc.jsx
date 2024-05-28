import React from 'react'
import { useState } from 'react'

const ClickCounterFunc = ({counter,incrementCounter,decrementCounter,resetCounter}) => {
  return (
    <div>
      <p>Click Counter : {counter}</p>
      <button type="button" onClick={incrementCounter}>+</button>
      <button type="button"onClick={decrementCounter}>-</button>
      <button type="button" onClick={resetCounter}>reset</button>
    </div>
  )
}

export default ClickCounterFunc
