import React from 'react'
import { useState } from 'react';

const Reusable_Func = ({render}) => {
    const [counter,setCounter] = useState(0);

    const incrementCounter = () =>{
        setCounter(counter+1);
    }
    const decrementCounter = () => {
        setCounter(counter-1);
    }
    const resetCounter = () => {
        setCounter(0);
    }
  return (
    <div>
        {
            render(counter,incrementCounter,decrementCounter,resetCounter)
        }
    </div>
  )
}

export default Reusable_Func
