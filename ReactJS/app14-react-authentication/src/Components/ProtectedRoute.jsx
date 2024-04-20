import React, { useContext, useEffect } from 'react'
import { context } from './AuthContext'
import { useLocation, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
   const {isLoggedIn} = useContext(context);
   const location = useLocation();
   console.log(location);

   useEffect(()=>{
    isLoggedIn ? navigate(location.pathname) : navigate("/login")
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
