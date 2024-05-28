import React from 'react'
import { useState } from 'react';

const HoverCounterFunc = ({counter,incrementCounter,decrementCounter,resetCounter}) => {

  return (
    <div>
      <p>Click Counter : {counter}</p>
      <button type="button" onMouseOver={incrementCounter}>+</button>
      <button type="button"onMouseOver={decrementCounter}>-</button>
      <button type="button" onMouseOver={resetCounter}>reset</button>
    </div>
  )
}

export default HoverCounterFunc
