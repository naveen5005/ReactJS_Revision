import React, { useState } from 'react'

const ReusableFunc = (props) => {
    console.log(props)
    const[user,setUser] = useState("naveen")
    const handleUserNameChange = () =>{
        setUser("Syam")
    }
  return (
    <div>
      <h2>Welcome to Reusable Func component</h2>
      <hr />
      {
        props.render(user,handleUserNameChange)
      }
    </div>
  )
}

export default ReusableFunc
