import React, { useCallback, useEffect, useState } from 'react'
import Demo from './Demo';

const HookUseCallback = () => {
    const [name, setName] = useState("");
    const [counter, setCounter] = useState(0);

    const getGreetings = useCallback(() => {
        return `Hello ${name}!`;
    },[name]);
    
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <hr />
            <Demo getGreetings = {getGreetings}/>
            <p>Counter is {counter}</p>
            <button type="button" onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
}

export default HookUseCallback
