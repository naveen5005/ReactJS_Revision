import React, { createContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userEmailInfo, userInfoDetails } from '../Store/userSlicer';

export const Context = createContext();
const AuthContext = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const users = useSelector((state)=>{
        return state.StoreDetails.users;
      })

      function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        return result;
    }
    
    
    const handleLogin = (user) => {
       const isUserExist = users.some((usr)=>usr.uname === user.uname && usr.pwd === user.pwd)
       console.log(isUserExist) 
       if(isUserExist){
            const authToken = generateRandomString(10);
            localStorage.setItem('authToken', authToken);
            dispatch(userInfoDetails(authToken))
            dispatch(userEmailInfo(user.uname));
            setAuthToken(authToken);
            navigate("/users")
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('authToken', authToken);
        navigate("/")
    }
    return (
        <div>
            <Context.Provider value={{authToken,handleLogin,handleLogout}}>
                {
                    children
                }
            </Context.Provider>
        </div>
    )
}

export default AuthContext
