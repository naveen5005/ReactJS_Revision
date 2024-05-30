import React from 'react'
import Pareant from './Pareant'
import { useState } from 'react'

const MainComp = () => {
    const [fname,setFullName] = useState("naveen");
  return (
    <div>
      welcome to the Main component
      <hr />
      <Pareant fname = {fname}/>
    </div>
  )
}

export default MainComp
