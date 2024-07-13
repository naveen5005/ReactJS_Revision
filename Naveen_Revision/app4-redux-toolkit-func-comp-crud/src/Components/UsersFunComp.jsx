import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteUserAsyncData, handleGetUsersAsyncData, handlePostUserAsyncData, handleUpdateUserAsyncData } from '../Store/userSlice';
import { useState } from 'react';
const UsersFunComp = () => {
    const [user,setUser] = useState({
        fname : "",
        gender : "",
        areasOfInterest : [],
        state : ""
    });
    const[isEdit,setIsEdit] = useState(null);

    const dispatch = useDispatch();
    const users = useSelector((state) => {
        return state.userSlice.users;
    });

    const handleChange = (e) =>{
        const newUser ={...user};
        if(e.target.name === "areasOfInterest"){
            const updatedAreasOfInterest = [...newUser.areasOfInterest];
            if(e.target.checked){
                updatedAreasOfInterest.push(e.target.value);
            }else{
                const index = updatedAreasOfInterest.indexOf(e.target.value);
                updatedAreasOfInterest.splice(index,1);
            }
            newUser.areasOfInterest = updatedAreasOfInterest;
        }else{
            newUser[e.target.name] = e.target.value;
        }
        setUser(newUser);
    }
    const handleAddUser = () => {
        dispatch(handlePostUserAsyncData(user));
        clearFormValues();
        handleGetDataFromStore();
    }
    const handleDeleteUser = (usr) =>{
        dispatch(handleDeleteUserAsyncData(usr));
        handleGetDataFromStore();
    }
    const handleEditUser = (usr) =>{
        setUser(usr);
        setIsEdit(usr.id);
    }
    const handleUpdateUser = () =>{
        dispatch(handleUpdateUserAsyncData(user));
        clearFormValues();
        setIsEdit(null);
        handleGetDataFromStore();
    }
    const clearFormValues = () =>{
        setUser({
            fname : "",
            gender : "",
            areasOfInterest : [],
            state : ""
        })
    }
    const handleGetDataFromStore = () =>{
        dispatch(handleGetUsersAsyncData());
    }
    useEffect(() => {
        handleGetDataFromStore();
    }, [])
    return (
        <div className='mainConatiner'>
            <div className="tableContainer">
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
                            users.map((usr) => (
                                <tr key={usr.id}>
                                    <td>{usr.fname}</td>
                                    <td>{usr.gender}</td>
                                    <td>{usr.areasOfInterest.join(", ")}</td>
                                    <td>{usr.state}</td>
                                    <td>
                                        <button type="button" onClick={()=>handleEditUser(usr)}>edit</button>
                                    </td>
                                    <td>
                                        <button type="button" onClick={()=>handleDeleteUser(usr)}>delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="formContainer">
                <form action="">
                    <label htmlFor="">FullName : </label>
                    <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />

                    <label htmlFor="">Gender : </label>
                    <input type="radio" name="gender" onChange={handleChange} value={"Male"} checked={user.gender === "Male"} /> Male
                    <input type="radio" name="gender" onChange={handleChange} value={"Female"} checked={user.gender === "Female"} /> Female
                    <input type="radio" name="gender" onChange={handleChange} value={"Others"} checked={user.gender === "Others"} /> Others <br />

                    <label htmlFor="">Areas Of Interest : </label>
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"HTML"} checked={user.areasOfInterest.includes("HTML")} /> HTML
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"CSS"} checked={user.areasOfInterest.includes("CSS")} /> CSS
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"JS"} checked={user.areasOfInterest.includes("JS")} /> JS
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"REACTJS"} checked={user.areasOfInterest.includes("REACTJS")} /> REACTJS
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"BOOTSTRAP"} checked={user.areasOfInterest.includes("BOOTSTRAP")} /> BOOTSTRAP <br />

                    <label htmlFor="">State : </label>
                    <select name="state" onChange={handleChange} value={user.state}>
                        <option value=""></option>
                        <option value="TS">TS</option>
                        <option value="AP">AP</option>
                        <option value="KA">KA</option>
                    </select> <br />
                    {
                        isEdit === null ? <button type="button" onClick={handleAddUser}>Add User</button>
                        : <button type="button" onClick={handleUpdateUser}>Update User</button>
                    }
                </form>
            </div>
        </div>
    )
}

export default UsersFunComp
