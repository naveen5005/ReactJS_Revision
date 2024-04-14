import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { handleDeleteUserAsyncAction, handleGetUserAsynAction, handlePostUserAsynAction, handleUpdateUserAsyncAction } from '../Store/actions';
import { useState } from 'react';


const UserFuncComp = () => {
    const [user,setUser] = useState({
        fname : "",
        gender :"",
        areasOfInterest :[],
        state :""
    });
    const [index,setIndex] = useState(null)

    const users =useSelector((state) => {
        return state.users
    })
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const newUser = {...user};
        if(e.target.name === "areasOfInterest"){
            if(e.target.checked){
                newUser.areasOfInterest.push(e.target.value);
            } else{
                const index = newUser.areasOfInterest.indexOf(e.target.value);
                newUser.areasOfInterest.splice(index,1);
            }
        }
        else{
            newUser[e.target.name] = e.target.value;
        }
        setUser(newUser);
    }
    const handleAddUser = () => {
        dispatch(handlePostUserAsynAction(user));
        clearForm();
    }
    const handleEditUser = (user) => {
        setUser(user);
        setIndex(user.id);
    }
    const handleUpdateUser = () => {
        dispatch(handleUpdateUserAsyncAction(user));
        clearForm();
        setIndex(null)
    }
    const handleDeleteUser = (user) => {
        dispatch(handleDeleteUserAsyncAction(user))
    }
    const clearForm = () => {
        setUser({
            fname : "",
            gender : "",
            areasOfInterest : [],
            state : ""
        })
    }
    useEffect(()=>{
        dispatch(handleGetUserAsynAction())
    },[])
    return (
        <div>
            <div className="formDisplay">
                <label htmlFor="">FullName : </label>
                <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />

                <label htmlFor="">Gender : </label>
                <input type="radio" name="gender" value={"Male"} onChange={handleChange} checked = {user.gender === "Male"} /> Male
                <input type="radio" name="gender" value={"Female"} onChange={handleChange} checked = {user.gender === "Female"} /> Female
                <input type="radio" name="gender" value={"Other"} onChange={handleChange} checked = {user.gender === "Other"} /> Other <br />

                <label htmlFor="">Areas Of Interest : </label>
                <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"HTML"} checked={user.areasOfInterest.includes("HTML")} /> HTML
                <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"CSS"} checked={user.areasOfInterest.includes("CSS")} /> CSS
                <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"JS"} checked={user.areasOfInterest.includes("JS")} /> JS
                <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"REACTJS"} checked={user.areasOfInterest.includes("REACTJS")} /> REACTJS
                <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"BOOTSTARP"} checked={user.areasOfInterest.includes("BOOTSTARP")} /> BOOTSTARP <br />

                <label htmlFor="">State : </label>
                <select name="state" value={user.state} onChange={handleChange}>
                    <option value=""></option>
                    <option value="AP">AP</option>
                    <option value="TS">TS</option>
                    <option value="KA">KA</option>
                </select> <br />

                {
                    index === null ? <button type="button" onClick={handleAddUser}>Add User</button>
                    : <button type="button" onClick={handleUpdateUser}>Update User</button>
                }
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
                                            <button type="button" onClick={()=>handleEditUser(usr)}>Edit</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={()=>handleDeleteUser(usr)}>Delete</button>
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
