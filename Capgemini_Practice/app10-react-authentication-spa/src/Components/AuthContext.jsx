import React from 'react'
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Context = createContext();
const AuthContext = ({children}) => {
    const [isLoggedin,setIsLoggedIn] = useState(false);
    const [users,setUsers] = useState([]);
    const navigate = useNavigate();

    const handleLogin = (user,element) =>{
       const isLoggedIn =  users.some((usr)=> usr.uname === user.uname && usr.pwd === user.pwd);
        if(isLoggedIn){
            console.log("true.....")
            setIsLoggedIn(true);
            navigate("/main")
        } else {
            if(user.uname.trim() === "" && user.pwd.trim() === ""){
                element.innerHTML = ("Please enter the username & password");
            }
            else if (user.uname.trim() === "") {
                element.innerHTML = ("Please enter the username");
            } else if (user.pwd.trim() === "") {
                element.innerHTML = ("Please enter the password");
            } else {
                element.innerHTML = "please recheck the username and password...!!!"
            }
        }
    }
    const handleLogOut = () => {
        setIsLoggedIn(false);
        navigate("/")
    }

    useEffect(()=>{
        fetch("http://localhost:3001/usersLoginDetails").then((res)=>res.json()).then((data)=>{
            setUsers(data);
        });
    },[])
  return (
    <div>
      <Context.Provider value={{isLoggedin,handleLogin,handleLogOut}}>
        {
            children
        }
      </Context.Provider>
    </div>
  )
}

export default AuthContext
