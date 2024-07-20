import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const Context = createContext();
const AuthContext = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    const handleLogin = (user, element) => {
        console.log(user);
        console.log(users);
        const isUserExist = users.some((usr) => usr.uname === user.uname && usr.pwd === user.pwd);
        const filteredUser = users.filter((usr)=>usr.uname === user.uname && usr.pwd === user.pwd);
        console.log(filteredUser);

        console.log(isUserExist)
        if (isUserExist) {
            setIsLoggedIn(true);
            navigate("/");
        } else {
            if (user.uname.trim() === '' || user.pwd.trim() === '') {
                element.innerHTML = 'Please enter both username and password';
            } else {
                element.innerHTML = 'Invalid username or password';
            }
        }
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/login")
    }
    const getDataFromServer = () => {
        fetch("http://localhost:3001/usersLoginDetails", {
            method: "GET",
            headers: { 'Content-type': 'application/json' },
            body: null
        }).then((res) => res.json()).then((data) => {
            setUsers(data);
        })
    }
    useEffect(() => {
        getDataFromServer();
    }, [])
    return (
        <div>
            <Context.Provider value={{ handleLogin, handleLogout, isLoggedIn }}>
                {
                    children
                }
            </Context.Provider>
        </div>
    )
}

export default AuthContext
