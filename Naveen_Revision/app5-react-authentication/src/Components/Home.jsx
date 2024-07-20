import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './AuthContext'

const Home = () => {
    const {handleLogOut} = useContext(Context);
  return (
    <div>
      <Link to={"/products"}>Products</Link> <br /><br />
      <button type="button" onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default Home
