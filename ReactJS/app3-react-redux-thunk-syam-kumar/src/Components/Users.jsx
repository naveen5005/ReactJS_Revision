import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { handleCreateUserAsync, handleDeleteUserAsync, handleGetDataAsync, handleGetUserAsync, handleUpdateUserAsync } from '../Store/actions';
const Users = () => {
  const [user, setUser] = useState({
    fname: "",
    gender: "",
    areasOfInterest: [],
    state: ""
  });
  const[index,setIndex] = useState(null);

  const storeData = useSelector((state) => {
    return state.users;
  })
  const dispatch = useDispatch();
  useEffect(() => {
    getUserData();
  }, []);

  function getUserData() {
    dispatch(handleGetUserAsync())
  }

  const handleDeleteUser = (user) => {
    dispatch(handleDeleteUserAsync(user));
  }

  const handleChange = (e) => {
    const newUser = { ...user };
    if (e.target.name === "areasOfInterest") {
      if (e.target.checked) {
        newUser.areasOfInterest.push(e.target.value);
      } else {
        const index = newUser.areasOfInterest.indexOf(e.target.value);
        newUser.areasOfInterest.splice(index, 1);
      }
    } else {
      newUser[e.target.name] = e.target.value;
    }
    setUser(newUser);
  }
  const handleAddUser = () =>{
    dispatch(handleCreateUserAsync(user));
    clearForm();
  }
  const handleEditUser = (user) =>{
    setUser(user);
    setIndex(user.id);
  }
  const handleUpdateUser = () =>{
    dispatch(handleUpdateUserAsync(user));
    setIndex(null);
    clearForm();
  }
  const clearForm = () =>{
    setUser({
      fname : "",
      gender : "",
      areasOfInterest : [],
      state : "",

    })
  }
  return (
    <div>
      <div className="formData">
        <form action="">
          <label htmlFor="">FullName : </label>
          <input type="text" name='fname' value={user.fname} onChange={handleChange} /> <br />
          <label htmlFor="">Gender : </label>
          <input type="radio" name="gender" onChange={handleChange} checked={user.gender === "Male"} value={"Male"} /> Male
          <input type="radio" name="gender" onChange={handleChange} checked={user.gender === "Female"} value={"Female"} /> Female
          <input type="radio" name="gender" onChange={handleChange} checked={user.gender === "Others"} value={"Others"} /> Others <br />
          <label htmlFor="">Areas Of Interest : </label>
          <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked={user.areasOfInterest.includes("HTML")} value={"HTML"} /> HTML
          <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked={user.areasOfInterest.includes("CSS")} value={"CSS"} /> CSS
          <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked={user.areasOfInterest.includes("JS")} value={"JS"} /> JS
          <input type="checkbox" name="areasOfInterest" onChange={handleChange} checked={user.areasOfInterest.includes("REACTJS")} value={"REACTJS"} /> REACTJS <br />
          <label htmlFor="">State : </label>
          <select name="state" value={user.state} onChange={handleChange}>
            <option value=""></option>
            <option value="AP">AP</option>
            <option value="TS">TS</option>
            <option value="KA">KA</option>
          </select> <br />

          {
            index === null ? <button type="button" onClick={handleAddUser}>ADD USER</button> :
            <button type="button" onClick={handleUpdateUser}>UPDATE USER</button>
          }
        </form>
      </div> <br />
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
              storeData.map((usr, i) => {
                return (
                  <tr key={i}>
                    <td>{usr.fname}</td>
                    <td>{usr.gender}</td>
                    <td>{usr.areasOfInterest.join(",")}</td>
                    <td>{usr.state}</td>
                    <td>
                      <button type="button" onClick={()=>handleEditUser(usr)}>edit</button>
                    </td>
                    <td>
                      <button type="button" onClick={() => handleDeleteUser(usr)}>delete</button>
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
