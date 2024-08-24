import React from 'react'
import { useState } from 'react'

const Reusable = ({render}) => {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    const handleDecrement = () => {
        setCounter(counter - 1);
    }
    const handleReset = () => {
        setCounter(0);
    }

  return (
    <div>
      {
        render(counter,handleIncrement,handleDecrement,handleReset)
      }
    </div>
  )
}

export default Reusable
