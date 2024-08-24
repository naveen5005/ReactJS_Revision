import React from 'react'
import { useState } from 'react'

const HOC = (OriginalComponent) => {
    const NewComponent = () => {
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
        return <OriginalComponent
            counter={counter}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleReset={handleReset}
        />

    }
    return NewComponent
}


export default HOC
