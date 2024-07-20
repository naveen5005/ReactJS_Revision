import React, { useContext, useEffect } from 'react'
import { Context } from './AuthContext'
import { useLocation, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {isLoggedIn} = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    console.log(isLoggedIn)
    useEffect(()=>{
        isLoggedIn ? navigate(location.pathname) : navigate("/login")
    },[isLoggedIn]);
  return (
    <div>
      {
        children
      }
    </div>
  )
}

export default ProtectedRoute
