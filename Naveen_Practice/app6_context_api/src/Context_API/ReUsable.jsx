import React from 'react'
import { useState } from 'react'
import { context } from './Context'
import UserComp from './UserComp';
import ProductComp from './ProductComp';

const ReUsable = () => {
    const [fname, setFullname] = useState("naveen");

    return (
        <div>
            <context.Provider value={{fname}}>
                <UserComp />
                <ProductComp/>
            </context.Provider>
        </div>
    )
}

export default ReUsable
