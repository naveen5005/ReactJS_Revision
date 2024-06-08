import React, { useEffect, useRef } from 'react'

const HookUseRef = () => {
    const unameRef = useRef(null);
    const pwdRef = useRef(null)
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(unameRef,pwdRef)
    }
    useEffect(()=>{
        unameRef.current.focus(); // to focus the 1st input field
    },[]);


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        Username : <input type="text" ref={unameRef}/> <br />
        Password :<input type="password" ref={pwdRef} /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default HookUseRef
