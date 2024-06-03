import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const authTokenDetails = useSelector((state) => state.StoreDetails?.userInfo?.authToken);

  useEffect(() => {
    const localAuthToken = localStorage.getItem('authToken');
    
    if (!localAuthToken) {
      navigate('/'); 
      return;
    } else{
        const pathname = window.location.pathname;
        if (pathname === '/') {
            navigate('/users');
        }
    }
  }, [authTokenDetails, navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
