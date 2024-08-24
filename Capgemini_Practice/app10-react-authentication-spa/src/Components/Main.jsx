import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './AuthContext'

const Main = () => {
    const {handleLogOut} = useContext(Context);
  return (
    <div>
      <Link to={"/product"}>Product</Link> <br /><br />
      <button type="button" onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default Main
