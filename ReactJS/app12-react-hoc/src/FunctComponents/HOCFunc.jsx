import React from 'react'
import { useState } from 'react'

const HOCFunc = (OriginalComponent) => {
    const NewComponent = () =>{
        const [counter,setCounter] = useState(0);

        const handleIncrement = () =>{
            setCounter(counter+1);
        }
        const handleDecrement = () =>{
            setCounter(counter-1);
        }
        const handleReset = () =>{
            setCounter(0);
        }
        return <OriginalComponent
        handleIncrement = {handleIncrement}
        counter = {counter}
        handleReset = {handleReset}
        handleDecrement = {handleDecrement}/>
    }
  return NewComponent
}

export default HOCFunc



