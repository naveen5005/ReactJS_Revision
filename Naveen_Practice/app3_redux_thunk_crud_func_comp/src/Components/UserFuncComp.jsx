import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { handleDeleteUserAsyncActions, handleGetUsersAsyncActions, handlePostUserAsyncActions, handlePutUserAsyncActions } from '../Store/action';
import { useState } from 'react';

const UserFuncComp = () => {
    const [user,setUser] = useState({
        fname : "",
        gender : "",
        areasOfInterest : [],
        state : ""
    });
    const[index,setIndex] = useState(null);

    // useSelector hook
    const usersDetails = useSelector((state) => {
        return state.users;
    })

    // useDispatch hook to dispatch the asynchronus action
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        const newUser = {...user};
        if(e.target.name === "areasOfInterest"){
            const updatedAreasOfInterest = [...user.areasOfInterest];
            if(e.target.checked){
                updatedAreasOfInterest.push(e.target.value);
            }else{
               const index = updatedAreasOfInterest.indexOf(e.target.value);
               updatedAreasOfInterest.splice(index,1)
            }
            newUser.areasOfInterest = updatedAreasOfInterest;
        }else{
            newUser[e.target.name] = e.target.value;
        }
        setUser(newUser);
    }
    const handleEditUser = (usr) =>{
        setUser(usr);
        setIndex(usr.id);
    }
    const handleAddUser = () => {
        dispatch(handlePostUserAsyncActions(user));
        clearFormValues();
    }
    const handleUpdateUser = () => {
        dispatch(handlePutUserAsyncActions(user));
        clearFormValues();
        setIndex(null);
    }
    const clearFormValues = () => {
        setUser({
            fname : "",
            gender : "",
            areasOfInterest : [],
            state : ""
        });
    }
    useEffect(() => {
        dispatch(handleGetUsersAsyncActions());
    }, [])
    return (
        <div>
            <h1>Welcome to the functional component </h1>
            <div className="formDiaplay">
                <form action="">
                    <label htmlFor="">FullName : </label>
                    <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />

                    <label htmlFor="">Gender : </label>
                    <input type="radio" name="gender" onChange={handleChange} value={"Male"} checked ={user.gender === "Male"} /> Male
                    <input type="radio" name="gender" onChange={handleChange} value={"Female"} checked ={user.gender === "Female"} /> Female
                    <input type="radio" name="gender" onChange={handleChange} value={"Others"} checked ={user.gender === "Others"} /> Others <br />

                    <label htmlFor="">Areas Of Interest : </label>
                    <input type="checkbox" onChange={handleChange} name="areasOfInterest" value={"HTML"} checked ={user.areasOfInterest.includes("HTML")} /> HTML
                    <input type="checkbox" onChange={handleChange} name="areasOfInterest" value={"CSS"} checked ={user.areasOfInterest.includes("CSS")} /> CSS
                    <input type="checkbox" onChange={handleChange} name="areasOfInterest" value={"JS"} checked ={user.areasOfInterest.includes("JS")} /> JS
                    <input type="checkbox" onChange={handleChange} name="areasOfInterest" value={"REACTJS"} checked ={user.areasOfInterest.includes("REACTJS")} /> REACTJS
                    <input type="checkbox" onChange={handleChange} name="areasOfInterest" value={"BOOTSTRAP"} checked ={user.areasOfInterest.includes("BOOTSTRAP")} /> BOOTSTRAP <br />

                    <label htmlFor="">State : </label>
                    <select name="state" value={user.state} onChange={handleChange}>
                        <option value="">--select--</option>
                        <option value="AP">AP</option>
                        <option value="TS">TS</option>
                        <option value="KA">KA</option>
                    </select> <br /><br />
                    {
                        index === null ? <button type="button" onClick={handleAddUser}>Add User</button> 
                        : <button type="button" onClick={handleUpdateUser}>Update User</button>
                    }
                </form>
            </div> <br />
            <div className="contentDisplay">
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
                            usersDetails.map((usr) => {
                                return (
                                    <tr key={usr.id}>
                                        <td>{usr.fname}</td>
                                        <td>{usr.gender}</td>
                                        <td>{usr.areasOfInterest.join(", ")}</td>
                                        <td>{usr.state}</td>
                                        <td>
                                            <button type="button" onClick={()=>handleEditUser(usr)}>edit</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={()=>dispatch(handleDeleteUserAsyncActions(usr))}>delete</button>
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

export default UserFuncComp;
