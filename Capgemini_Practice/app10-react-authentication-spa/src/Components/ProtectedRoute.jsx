import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Context } from './AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {isLoggedin} = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    console.log(isLoggedin)

    useEffect(()=>{
        isLoggedin ? navigate(location.pathname) : navigate("/");
    },[isLoggedin,navigate])
  return (
    <div>
      {
        children
      }
    </div>
  )
}

export default ProtectedRoute
