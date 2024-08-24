import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { Context } from './AuthContext';

const Users = () => {
    const [user,setUser] = useState({
        uname : "",
        pwd : ""
    });

    const {handleLogin} = useContext(Context);
    const handleChange = (e) => {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }
  return (
    <div> <br /><br /><br />
      <form action="">
        <p id="error" style={{color : 'red'}}></p>
        <label htmlFor="">username : </label>
        <input type="text" name='uname' onChange={handleChange} value={user.uname}/> <br />
        <label htmlFor="">password : </label>
        <input type="password" name='pwd' onChange={handleChange} value={user.pwd} /> <br /><br />

        <button type="button" onClick={()=>handleLogin(user,document.getElementById("error"))}>Login</button>
      </form>
    </div>
  )
}

export default Users
