import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/context';

const UsersFunc = () => {
   const {fullName , handleChangeFullName}= useContext(Context);
  return (
    <div>
        <h1>Welcome to the Function Component</h1>
      <h2>Hi, I am {fullName}</h2>
      <button type="button" onClick={handleChangeFullName}>Click Me</button>
    </div>
  )
}

export default UsersFunc
