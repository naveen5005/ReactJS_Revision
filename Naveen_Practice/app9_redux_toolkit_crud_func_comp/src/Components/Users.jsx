import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { handleDeleteUserAsync, handleGetUserAsync, handlePostUserAsync, handleUpdateUserAsync } from '../Store/userSlice';
const Users = () => {
    const [user, setUser] = useState({
        fname: "",
        gender: "",
        areasOfInterest: [],
        state: ""
    });
    const [isEdit,setIsEdit] = useState(null);

    const dispatch = useDispatch();

    const users = useSelector((state) => {
        return state.users;
    });

    const handleChange = (e) => {
        const newUser = { ...user };
        if (e.target.name === "areasOfInterest") {
            const newArray = [...newUser.areasOfInterest]
            if (e.target.checked) {
                newArray.push(e.target.value);
            } else {
                const index = newArray.indexOf(e.target.value);
                newArray.splice(index, 1);
            }
            newUser.areasOfInterest = newArray;
        } else {
            newUser[e.target.name] = e.target.value;
        }
        setUser(newUser);
    }
    const handleAddUser = () => {
        dispatch(handlePostUserAsync(user));
        handleGetUsersFromStore();
        clearForm();
    }
    const handleDeleteUser = (user) =>{
        dispatch(handleDeleteUserAsync(user));
        handleGetUsersFromStore();
    }
    const handleEditUser = (user)=>{
        setUser(user);
        setIsEdit(user.id);
    }
    const handleUpdateUser = () => {
        dispatch(handleUpdateUserAsync(user));
        handleGetUsersFromStore();
        clearForm();
        setIsEdit(null);
    }
    const clearForm = () => {
        setUser({
            fname: "",
            gender: "",
            areasOfInterest: [],
            state: ""
        })
    }
    const handleGetUsersFromStore = () => {
        dispatch(handleGetUserAsync());
    }
    useEffect(() => {
        handleGetUsersFromStore();
    }, []);
    return (
        <div className="mainContainer">
            <div className="formContainer">
                <form action="">
                    <label htmlFor="">FullName : </label>
                    <input type="text" name="fname" value={user.fname} onChange={handleChange} /> <br />

                    <label htmlFor="">Gender : </label>
                    <input type="radio" name="gender" value={"Male"} onChange={handleChange} checked={user.gender === "Male"} /> Male
                    <input type="radio" name="gender" value={"Female"} onChange={handleChange} checked={user.gender === "Female"} /> Female
                    <input type="radio" name="gender" value={"Others"} onChange={handleChange} checked={user.gender === "Others"} /> Others <br />

                    <label htmlFor="">Areas Of Interest : </label>
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"HTML"} checked={user.areasOfInterest.includes("HTML")} /> HTML
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"CSS"} checked={user.areasOfInterest.includes("CSS")} /> CSS
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"JS"} checked={user.areasOfInterest.includes("JS")} /> JS
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"REACTJS"} checked={user.areasOfInterest.includes("REACTJS")} /> REACTJS
                    <input type="checkbox" name="areasOfInterest" onChange={handleChange} value={"BOOTSTRAP"} checked={user.areasOfInterest.includes("BOOTSTRAP")} /> BOOTSTRAP <br />

                    <label htmlFor="">State : </label>
                    <select name="state" value={user.state} onChange={handleChange}>
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
            </div> <br />
            <div className='tableContainer'>
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
                            users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.fname}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.areasOfInterest.join(", ")}</td>
                                        <td>{user.state}</td>
                                        <td>
                                            <button type="button" onClick={()=>handleEditUser(user)}>Edit</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={()=>handleDeleteUser(user)}>Delete</button>
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
