import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Context = createContext();
const AuthContext = ({ children }) => {
    // console.log(children)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [allUsers, setAllUsers] = useState([]);

    const navigate = useNavigate();

    const handleLogIn = (user, element) => {
        const isUserExist = allUsers.some((data) => data.uname === user.uname && data.pwd === user.pwd);
        console.log(isUserExist)
        if (isUserExist) {
            console.log("object...")
            navigate("/");
            setIsLoggedIn(true);
        } else {
            if (user.uname.trim() === "" && user.pwd.trim() === "") {
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

    useEffect(() => {
        fetch("http://localhost:3001/usersLoginDetails").then((res) => res.json()).then((data) => {
            setAllUsers(data);
        })
    }, []);
    return (
        <div>
            <Context.Provider value={{ isLoggedIn, handleLogIn, handleLogOut }}>
                {
                    children
                }
            </Context.Provider>
        </div>
    )
}

export default AuthContext
