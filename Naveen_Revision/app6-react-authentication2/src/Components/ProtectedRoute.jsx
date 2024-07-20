import React, { useContext, useEffect } from 'react'
import { Context } from './AuthContext'
import { useLocation, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {isLoggedIn} = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        isLoggedIn ? navigate(location.pathname) : navigate("/login");
    },[isLoggedIn,navigate])
  return (
    <div>
      {
        children
      }
    </div>
  )
}

export default ProtectedRoute
