import React from 'react'
import { Context } from './ReusableComp'

const HoverCounter = () => {

    return (
        <div>
            <Context.Consumer>
                {
                    ({ counter, handleIncrement, handleDecrement, handleReset }) => {
                        return (
                            <div>
                                <p>Counter :  {counter}</p>
                                <button type="button" onMouseOver={handleIncrement}>Increment</button>
                                <button type="button" onMouseOver={handleDecrement}>Decrement</button>
                                <button type="button" onMouseOver={handleReset}>Reset</button>
                            </div>
                        )
                    }
                }
            </Context.Consumer>
        </div>
    )
}

export default HoverCounter
