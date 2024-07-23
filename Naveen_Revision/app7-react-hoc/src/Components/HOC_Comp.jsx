import React, { useState } from 'react'

const HOC_Comp = (OriginalComponent) => {    
    const NewComponent = () => {
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
      return <OriginalComponent counter = {counter}
      handleIncrement = {handleIncrement}
      handleDecrement = {handleDecrement}
      handleReset = {handleReset}/>
    }
    
  return NewComponent
}

export default HOC_Comp
