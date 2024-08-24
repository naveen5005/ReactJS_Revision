import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export const Context = createContext();
const ReusableComp = () => {
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
            <Context.Provider value={{ counter, handleIncrement, handleDecrement, handleReset }}>
                <ClickCounter/>
                <hr/>
                <HoverCounter/>
            </Context.Provider>
        </div>
    )
}

export default ReusableComp
