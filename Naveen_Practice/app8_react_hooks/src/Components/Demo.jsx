import React, { useEffect, useState } from 'react'

const Demo = ({getGreetings}) => {
    const[greeting, setGreeting] = useState("")
    
    useEffect(()=>{
        console.log("useEffect is triggered...!!!")
        setGreeting(getGreetings())
    },[getGreetings])
  return (
    <div>
      <p>{greeting}</p>
    </div>
  )
}

export default Demo
