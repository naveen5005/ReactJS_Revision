import React, { useContext } from 'react'
import { Context } from './AuthContext'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';


const Users = () => {
  const { handleLogout } = useContext(Context);

  const users = useSelector((state) => {
    return state.StoreDetails.users;
  })
  return (
    <div>
      Welcome to the Users Component <br /> <br />
      <ul>
        {
          users.map((usr) => {
            return (
              <li key={usr.id}>
                <Link to={`${usr.id}`}>{usr.uname}</Link>
              </li>
            )
          })
        }
      </ul>
      <Outlet/>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Users
