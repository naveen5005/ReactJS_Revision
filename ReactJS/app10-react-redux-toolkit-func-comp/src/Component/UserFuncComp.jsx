import React from 'react'
import { useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { handleDeleteUserAsyncAction, handleGetUserAsyncAction, handlePostUserAsyncAction, handleUpdateUserAsyncAction } from '../Store/userSlicer';
import { useState } from 'react';
const UserFuncComp = () => {
    const [user,setUser] = useState({
        fname : "",
        gender : "",
        areasOfInterest : [],
        state : ""
    });
    const [index,setIndex] = useState(null);

    const users = useSelector((state)=>{
        return state.users
    })
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        const newUser = {...user};
        if(e.target.name === "areasOfInterest"){
            let updatedAreasOfInterest = [...newUser.areasOfInterest];
            if (e.target.checked) {
                updatedAreasOfInterest.push(e.target.value);
            } else {
                const index = updatedAreasOfInterest.indexOf(e.target.value);
                updatedAreasOfInterest.splice(index, 1);
            }
            newUser.areasOfInterest = updatedAreasOfInterest;
        }else{
            newUser[e.target.name] = e.target.value;
        }
        setUser(newUser);
    }
    const handleAddUser = () => {
        dispatch(handlePostUserAsyncAction(user));
        handleGetUsersData();
        clearForm();
    }
    const handleDeleteUSer = (user) =>{
        dispatch(handleDeleteUserAsyncAction(user));
        handleGetUsersData();
    }
    const handleEditUser = (user) => {
        setUser(user);
        setIndex(user.id)
    }
    const handleUpdateUser = () => {
        dispatch(handleUpdateUserAsyncAction(user));
        handleGetUsersData();
        clearForm();
        setIndex(null);
    }
    const clearForm = () => {
        setUser({
            fname : "",
            gender : "",
            areasOfInterest : [],
            state : ""
        })
    }
    const handleGetUsersData = () => {
        dispatch(handleGetUserAsyncAction())
    }
    useEffect(()=>{
        handleGetUsersData();
    },[])
  return (
    <div className='mainContentDisplay'>
      <div className="formDisplay">
        <form action="">
            <label htmlFor="">FullName : </label>
            <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />

            <label htmlFor="">Gender : </label>
            <input type="radio" name="gender" onChange={handleChange} value={"Male"} checked={user.gender === "Male"} /> Male
            <input type="radio" name="gender" onChange={handleChange} value={"Female"} checked={user.gender === "Female"} /> Female
            <input type="radio" name="gender" onChange={handleChange} value={"Others"} checked={user.gender === "Others"} /> Others <br />

            <label htmlFor="">Areas Of Ineterst : </label>
            <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"HTML"}checked ={user.areasOfInterest.includes("HTML")} /> HTML 
            <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"CSS"}checked ={user.areasOfInterest.includes("CSS")} /> CSS 
            <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"JS"}checked ={user.areasOfInterest.includes("JS")} /> JS 
            <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"BOOTSTRAP"}checked ={user.areasOfInterest.includes("BOOTSTRAP")} /> BOOTSTRAP 
            <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"REACTJS"}checked ={user.areasOfInterest.includes("REACTJS")} /> REACTJS <br />

            <label htmlFor="">State : </label>
            <select name="state" onChange={handleChange} value={user.state}>
                <option value=""></option>
                <option value="AP">AP</option>
                <option value="TS">TS</option>
                <option value="KA">KA</option>
            </select> <br />
            {
                index === null ? <button type="button" onClick={handleAddUser}>Add User</button>
                : <button type="button" onClick={handleUpdateUser}>Update User</button>
            }
        </form>
      </div> <br /> <br />
      <div className="tableDisplay">
        <table border={2}>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Gender</th>
                    <th>Areas Of Interest</th>
                    <th>State</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((usr,i)=>{
                        return(
                            <tr key={i}>
                                <td>{usr.fname}</td>
                                <td>{usr.gender}</td>
                                <td>{usr.areasOfInterest.join(", ")}</td>
                                <td>{usr.state}</td>
                                <td>
                                    <button type="button" onClick={()=>handleEditUser(usr)}>edit</button>
                                </td>
                                <td>
                                    <button type="button" onClick={()=>handleDeleteUSer(usr)}>delete</button>
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

export default UserFuncComp
