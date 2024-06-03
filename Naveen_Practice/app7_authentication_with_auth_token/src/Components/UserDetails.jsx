import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const UserDetails = () => {
    const {id} = useParams();

   const users = useSelector((state)=>{
        return state.StoreDetails.users;
    });
    const user = users ? users.find((user) => user.id === parseInt(id)) : null;

    if (!user) {
        return <div>User not found</div>;
    }
  return (
    <div>
      Welcome to UserDetails section...
      <p>{user.uname}</p>
      <Link to={"/users"}>return</Link>
    </div>
  )
}

export default UserDetails
