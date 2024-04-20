import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const context = createContext();

const AuthContext = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [allUsers, setAllUsers] = useState([
        {
            uname: "naveen",
            pwd: "12345"
        },
        {
            uname: "kiran",
            pwd: "12345"
        },
        {
            uname: "venky",
            pwd: "12345"
        },
        {
            uname: "priya",
            pwd: "12345"
        },
    ]);
    const navigate = useNavigate();
    const handleLogIn = (user,element) => {
        const isUserExist = allUsers.some((data) => data.uname === user.uname && data.pwd === user.pwd);
        if (isUserExist) {
            setIsLoggedIn(true);
            navigate("/")
        }else{
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
        navigate("/login");
    }
    return (
        <div>
            <context.Provider value={{ isLoggedIn, handleLogIn, handleLogOut }}>
                {
                    children
                }
            </context.Provider>
        </div>
    )
}

export default AuthContext
