import React from 'react'
import { useState } from 'react'
import { Context } from './context';
import UsersFunc from '../Components/UsersFunc';
import UsersClass from '../Components/UsersClass';

const ReUsable = () => {
    const [fullName , setFullName] = useState("naveen");
    
    const handleChangeFullName = () => {
        setFullName("praveen Kumar");
    }
  return (
    <div>
      <Context.Provider value={{fullName , handleChangeFullName}}>
        <UsersFunc/>
        <hr />
        <UsersClass/>
      </Context.Provider>
    </div>
  )
}

export default ReUsable
