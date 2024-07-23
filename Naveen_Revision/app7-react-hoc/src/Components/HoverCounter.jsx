import React from 'react'
import HOC_Comp from './HOC_Comp'

const HoverCounter = (props) => {
    const {counter, handleIncrement, handleDecrement, handleReset} = props;
    return (
        <div>
            <p>Hover Counter is : { counter}</p>
            <button type="button" onMouseOver={handleIncrement}>Hover Increment</button>
            <button type="button" onMouseOver={handleDecrement}>Hover Decrement</button>
            <button type="button" onMouseOver={handleReset}>Hover Reset</button>
        </div>
    )
}

export default HOC_Comp(HoverCounter)
