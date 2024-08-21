import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDeleteUserAsyncData, handleGetUsersAsyncData, handlePostUSerAsyncData, handleUpdateUserAsyncData } from '../Store/userSlice'

const Users = () => {
    const [user,setUser] = useState({
        fname : "",
        gender : "",
        areasOfInterest : [],
        state : ""
    });
    const[isEdit,setIsEdit] = useState(null);

    const handleChange = (e) =>{
        const newUser = {...user};
        if(e.target.name === "areasOfInterest"){
            const newAreasOfInterest =[...newUser.areasOfInterest];
            if(e.target.checked){
                newAreasOfInterest.push(e.target.value);
            } else{
                const index = newAreasOfInterest.indexOf(e.target.value);
                newAreasOfInterest.splice(index,1);
            }
            newUser.areasOfInterest = newAreasOfInterest;
        } else {
            newUser[e.target.name] = e.target.value;
        }
        setUser(newUser);
    }
    const addUser = () =>{
        console.log(user);
        dispatch(handlePostUSerAsyncData(user));
        getData();
    }
    const users = useSelector((state) => {
        return state.userSlice.users;
    })
    const dispatch = useDispatch();

    const handleDelete = (usr) =>{
        dispatch(handleDeleteUserAsyncData(usr));
        getData();
    }
    const handleEdit = (usr) =>{
        setUser(usr);
        setIsEdit(usr.id);
    }
    const updateUser = () => {
        dispatch(handleUpdateUserAsyncData(user));
        setIsEdit(null);
        getData();
    }
    const getData = () => {
        dispatch(handleGetUsersAsyncData())
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <div className="form Container">
                <label htmlFor="">FullName :</label>
                <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />

                <label htmlFor="">Gender : </label>
                <input type="radio" name="gender" onChange={handleChange} checked={user.gender==="Male"} value={"Male"}  /> Male
                <input type="radio" name="gender" onChange={handleChange} checked={user.gender==="Female"} value={"Female"}  /> Female
                <input type="radio" name="gender" onChange={handleChange} checked={user.gender==="Others"} value={"Others"}  /> Others <br />

                <label htmlFor="">Areas Of Interest : </label>
                <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked={user.areasOfInterest.includes("HTML")} value={"HTML"} /> HTML
                <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked={user.areasOfInterest.includes("CSS")} value={"CSS"} /> CSS
                <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked={user.areasOfInterest.includes("JS")} value={"JS"} /> JS 
                <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked={user.areasOfInterest.includes("REACTJS")} value={"REACTJS"} /> REACTJS 
                <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked={user.areasOfInterest.includes("BOOTSTRAP")} value={"BOOTSTRAP"} /> BOOTSTRAP <br />

                <label htmlFor="">State : </label>
                <select name="state" onChange={handleChange} value={user.state}>
                    <option value=""></option>
                    <option value="TS">TS</option>
                    <option value="AP">AP</option>
                    <option value="KA">KA</option>
                </select> <br />

                {
                    isEdit === null ? <button type="button" onClick={addUser}>Add User</button>
                    : <button type="button" onClick={updateUser}>Update User</button>
                }

            </div> <br />
            <div className="table">
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
                            users.map((usr) => {
                                return (
                                    <tr key={usr.id}>
                                        <td>{usr.fname}</td>
                                        <td>{usr.gender}</td>
                                        <td>{usr.areasOfInterest.join(", ")}</td>
                                        <td>{usr.state}</td>
                                        <td>
                                            <button type="button" onClick={()=>handleEdit(usr)}>edit</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={()=>handleDelete(usr)}>delete</button>
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
