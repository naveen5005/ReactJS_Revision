import React, { useContext, useState } from 'react'
import { context } from './AuthContext'

const Login = () => {
    const { handleLogIn, isLoggedIn, handleLogOut } = useContext(context);
    const [user, setUser] = useState({
        uname: "",
        pwd: ""
    })

    const handleChange = (e) => {
        const newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    return (
        <>
            <form action="">
                {!isLoggedIn && <p id='error' style={{ color: 'red' }}></p>}

                <label htmlFor="">UserName : </label>
                <input type="text" name="uname" value={user.uname} onChange={handleChange} /> <br />
                <label htmlFor="">Password : </label>
                <input type="password" name="pwd" value={user.pwd} onChange={handleChange} /> <br />

                <button type="button" onClick={() => handleLogIn(user, document.getElementById('error'))}>Login</button>
            </form>
        </>
    )
}

export default Login
