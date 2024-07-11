import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleDeleteUserAsyncAction, handleGetUsersAsyncAction, handlePostUserAsyncAction, handleUpdateUserAsyncAction } from '../Store/actions';

const UsersFuncComp = () => {
    const[user,setUser] = useState({
        fname : "",
        gender : "",
        areasOfInterest : [],
        state : ""
    });
    const[isEdit,setIdEdit] = useState(null);

    const dispatch = useDispatch();
    const users = useSelector((state) => {
        return state.users;
    });

    const handleChange = (e) =>{
        const newUser = {...user};
        if(e.target.name === "areasOfInterest"){
            const updatedAreasOfInterest = [...newUser.areasOfInterest];
            if(e.target.checked){
                updatedAreasOfInterest.push(e.target.value);
            } else{
                const index = updatedAreasOfInterest.indexOf(e.target.value);
                updatedAreasOfInterest.splice(index,1);
            }
            newUser.areasOfInterest = updatedAreasOfInterest;
        }else{
            newUser[e.target.name] = e.target.value;
        }
        setUser(newUser);
    }
    const handleAddUser = () =>{
        dispatch(handlePostUserAsyncAction(user));
        clearForms();
    }
    const handleDeleteUser = (user) =>{
        dispatch(handleDeleteUserAsyncAction(user));
    }
    const handleEditUser = (usr) =>{
        setUser(usr);
        setIdEdit(usr.id);
    }
    const handleUpdateUser = () =>{
        dispatch(handleUpdateUserAsyncAction(user));
        setIdEdit(null);
        clearForms();
    }
    const clearForms = () =>{
        setUser({
            fname : "",
            gender : "",
            areasOfInterest : [],
            state : ""
        })
    }
    useEffect(() => {
        dispatch(handleGetUsersAsyncAction());
    }, []);

    return (

        <div className='mainContainer'>
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
                            users.map((usr)=>{
                                return(
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
                                )
                            })
                        }
                    </tbody>
                </table>
            </div> <br />
            <div className="formContainer">
                <form action="">
                    <label htmlFor="">FullName : </label>
                    <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />

                    <label htmlFor="">Gender : </label>
                    <input type="radio" name="gender" onChange={handleChange} checked={user.gender==="Male"} value={"Male"} /> Male
                    <input type="radio" name="gender" onChange={handleChange} checked={user.gender==="Female"} value={"Female"} /> Female
                    <input type="radio" name="gender" onChange={handleChange} checked={user.gender==="Others"} value={"Others"} /> Others <br />

                    <label htmlFor="">Areas Of Interest : </label>
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked = {user.areasOfInterest.includes("HTML")} value ={"HTML"}  /> HTML
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked = {user.areasOfInterest.includes("CSS")} value ={"CSS"}  /> CSS
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked = {user.areasOfInterest.includes("JS")} value ={"JS"}  /> JS
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked = {user.areasOfInterest.includes("REACTJS")} value ={"REACTJS"}  /> REACTJS
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked = {user.areasOfInterest.includes("BOOTSTRAP")} value ={"BOOTSTRAP"}  /> BOOTSTRAP <br />

                    <label htmlFor="">State : </label>
                    <select name="state" onChange={handleChange} value={user.state}>
                        <option value=""></option>
                        <option value="AP">AP</option>
                        <option value="TS">TS</option>
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

export default UsersFuncComp
