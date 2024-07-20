import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './AuthContext'

const Main = () => {
    const {handleLogout} = useContext(Context);

  return (
    <div>
      Main <br />
      <Link to={"/products"}>Product</Link> <br />
      <button type='button' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Main
