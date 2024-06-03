import React, { useContext, useEffect, useState } from 'react'
import { Context } from './AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Login = () => {
const location = useLocation();
const navigate = useNavigate();


    useSelector((state)=>{
      console.log(state)
    })
    const[user,setUser] = useState({
        uname : "",
        pwd : ""
    })

    const {handleLogin} = useContext(Context);
    const handleChange = (e) => {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    useEffect(() => {
      const localAuthToken = localStorage.getItem('authToken');
      if (localAuthToken) {
        const pathname = window.location.pathname;
        if (pathname === '/') {
          navigate('/users'); 
        }
      }
    }, [navigate]);


  return (
    <div>
      <h2>Welcome to the Login Component</h2>
      <form action="">
        <label htmlFor="">UserName : </label>
        <input type="text" name="uname" value={user.uname} onChange={handleChange}  /> <br />
        <label htmlFor="">Password : </label>
        <input type="password" name="pwd" value={user.pwd} onChange={handleChange}  /> <br />

        <button type="button" onClick={()=>handleLogin(user)}>Login</button>
      </form>
    </div>
  )
}

export default Login
