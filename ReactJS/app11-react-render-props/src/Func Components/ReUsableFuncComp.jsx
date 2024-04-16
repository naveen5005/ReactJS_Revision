import React, { useState } from 'react'

const ReUsableFuncComp = (props) => {
    // console.log(props)
    const [fname,setFname] = useState("naveen");

    const handleUserNameChange = () =>{
        setFname("Syam")
    }
  return (
    <div>
        {
            props.render(fname,handleUserNameChange)
        }
    </div>
  )
}

export default ReUsableFuncComp
