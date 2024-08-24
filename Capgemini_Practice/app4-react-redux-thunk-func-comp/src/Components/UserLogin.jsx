import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { handleDeleteUserLoginAsyncData, handleGetUserLoginsAsyncData, handlePostUserLoginAsyncData, handleUpdateUserLoginAsyncData } from '../Store/actions';
import { useState } from 'react';
const UserLogin = () => {
    const [userLogin,setUserLogin] = useState({
        uname : "",
        pwd : ""
    });
    const[isEdit,setIsEdit] = useState(null);

    const userLogins = useSelector((state)=>{
        return state.userLogins;
    });
    const dispacth = useDispatch();
    
    const handleChange = (e) => {
        const newUserLogin = {...userLogin};
        newUserLogin[e.target.name] = e.target.value;
        setUserLogin(newUserLogin)
    }
    
    const addLoginDetails = () => {
        dispacth(handlePostUserLoginAsyncData(userLogin));
        clearValues();
    }
    const deleteUserLoginDetail = (user) => {
        dispacth(handleDeleteUserLoginAsyncData(user));
    }
    const editUserLoginDetail = (user) => {
        setUserLogin(user);
        setIsEdit(user.id);
    }
    const updateLoginDetails = () => {
        dispacth(handleUpdateUserLoginAsyncData(userLogin));
        clearValues();
        setIsEdit(null);
    }
    const clearValues = () => {
        setUserLogin({
            uname : "",
            pwd : ""
        })
    }
    const getUserLoginsFromStore = () => {
        dispacth(handleGetUserLoginsAsyncData());
    }
    useEffect(()=>{
        getUserLoginsFromStore();
    },[])
  return (
    <div className='main container'>
      <div className="form wrapper">
        <label htmlFor="">Email : </label>
        <input type="email" name="uname" value={userLogin.uname} onChange={handleChange} /> <br />
        <label htmlFor="">Password : </label>
        <input type="text" name="pwd" value={userLogin.pwd} onChange={handleChange} /> <br />

        {
            isEdit === null ? <button type="button" onClick={addLoginDetails}>Add Login Details</button>
            : <button type="button" onClick={updateLoginDetails}>Update Login Details</button>
        }
      </div> <br />
      <div className="table wrapper">
        <table border={2}>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    userLogins.map((user) => (
                        <tr key={user.id}>
                            <td>{user.uname}</td>
                            <td>{user.pwd}</td>
                            <td>
                                <button type="button" onClick={()=>editUserLoginDetail(user)}>edit</button>
                            </td>
                            <td>
                                <button type="button" onClick={()=>deleteUserLoginDetail(user)}>delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserLogin
