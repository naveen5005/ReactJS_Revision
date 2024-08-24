import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleAddUserLoginAsyncAction, handleDeleteUserLoginAsyncAction, handleGetUserLoginAsyncAction, handleUpdateUserLoginAsyncAction } from '../Store/userLoginSlicer';
import { useEffect } from 'react';
import { useState } from 'react';

const UserLoginFunc = () => {
    const [userLogin, setUserLogin] = useState({
        uname: '',
        pwd: ''
    });
    const [isEdit, setIsEdit] = useState(null);
    const userLogins = useSelector((state) => {
        return state.userLogins;
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const newUserLogin = { ...userLogin };
        newUserLogin[e.target.name] = e.target.value;
        setUserLogin(newUserLogin);
    }
    const addUserLogin = () => {
        dispatch(handleAddUserLoginAsyncAction(userLogin));
        clearValues();
        getUserLoginDetailsFromStore();
    }
    const deleteUserLoginDetail = (user) => {
        dispatch(handleDeleteUserLoginAsyncAction(user));
        getUserLoginDetailsFromStore();
    }
    const editUserLoginDetails = (user) => {
        setUserLogin(user);
        setIsEdit(user.id);
    }
    const updateUserLoginDetails = () =>{
        dispatch(handleUpdateUserLoginAsyncAction(userLogin));
        clearValues();
        setIsEdit(null);
        getUserLoginDetailsFromStore();
    }
    const clearValues = () => {
        setUserLogin({
            id: "",
            uname: "",
            pwd: ""
        })
    }
    const getUserLoginDetailsFromStore = () => {
        dispatch(handleGetUserLoginAsyncAction());
    }
    useEffect(() => {
        getUserLoginDetailsFromStore();
    }, [])
    return (
        <div>
            <div className="form-wrapper">
                <form action="">
                    <label htmlFor="">Username : </label>
                    <input type="text" name='uname' value={userLogin.uname} onChange={handleChange} /> <br />

                    <label htmlFor="">Password : </label>
                    <input type="text" name="pwd" value={userLogin.pwd} onChange={handleChange} /> <br />

                    {
                        isEdit === null ? <button type="button" onClick={addUserLogin}>Add User Login Details</button>
                            : <button type="button" onClick={updateUserLoginDetails}>Update User Login Details</button>
                    }
                </form>
            </div> <br />
            <div className="table-wrapper">
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
                            userLogins.map((user) =>
                                <tr key={user.id}>
                                    <td>{user.uname}</td>
                                    <td>{user.pwd}</td>
                                    <td>
                                        <button type="button" onClick={() => editUserLoginDetails(user)}>edit</button>
                                    </td>
                                    <td>
                                        <button type="button" onClick={() => deleteUserLoginDetail(user)}>delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserLoginFunc
