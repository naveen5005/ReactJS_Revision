import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { handleDeleteUserAsync, handleGetUserAsync, handleUpdateUserAsync, postDataToApi } from '../Store/actions';

const Users = () => {
  const[user,setUser] = useState({
    email : "",
    username : "",
    password : ""
  });
  const[index,setIndex] =useState(null);

  const users = useSelector((state)=>{
    console.log(state)
    return state.users;
  })
  const dispatch = useDispatch();

  const handleAdd = () =>{
    dispatch(handleGetUserAsync())
  }
  const handleDelete = (usr) =>{
    dispatch(handleDeleteUserAsync(usr))
  }
  useEffect(()=>{
    handleAdd();
  },[])


  const handleChange = (e) =>{
    var newUser = {...user}
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }
  const handleAddUser  = (usr) =>{
    dispatch(postDataToApi(usr));
    clearUser();
  }
  const handleEdit = (usr) =>{
    setUser(usr);
    setIndex(usr.id);
  }
  const handleUpdateUser = () =>{
    dispatch( handleUpdateUserAsync(user));
    setIndex(null);
    clearUser();
  }
  const clearUser = () =>{
    setUser({
      email : "",
      username : "",
      password : ""
    })
  }
  return (
    <div>
      <div className="formDisplay">
          <label htmlFor="">Email : </label>
          <input type="text" name="email" value={user.email} onChange={handleChange} /><br />
          <label htmlFor="">UserName : </label>
          <input type="text" name="username" value={user.username} onChange={handleChange} /><br />
          <label htmlFor="">Password : </label>
          <input type="text" name="password" value={user.password} onChange={handleChange} /><br />
          {
            index === null ? <button type="button" onClick={() =>{handleAddUser(user)}}>Add User</button>
            : <button type="button" onClick={() =>{handleUpdateUser(user)}}>Update User</button>
          }
      </div> <br />
      <div className="tableDisplay">
        <table border={2}>
          <thead>
            <tr>
              <th>Email</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((usr,i)=>{
                return(
                  <tr key={i}>
                    <td>{usr.email}</td>
                    <td>{usr.username}</td>
                    <td>{usr.password}</td>
                    <td>
                      <button type="button" onClick={()=>handleEdit(usr,i)}>edit</button>
                    </td>
                    <td>
                      <button type="button" onClick={()=>handleDelete(usr,i)}>delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
