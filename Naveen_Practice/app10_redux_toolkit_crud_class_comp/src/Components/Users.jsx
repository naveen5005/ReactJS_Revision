import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleDeleteUserAsync, handleGetUserAsync, handlePostUserAsync, handleUpdateUserAsync } from '../Store/rootReducer'

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                fname: "",
                gender: "",
                areasOfInterest: [],
                state: ""
            },
            isEdit: null
        }
    }
    handleChange = (e) => {
        const newUser = { ...this.state.user };
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
        this.setState({ user: newUser });
    }
    handleAddUser = () => {
        this.props.dispatch(handlePostUserAsync(this.state.user));
        this.handleGetUsersFromStore();
        this.clearForm();
    }
    handleEditUser = (usr) =>{
        this.setState({user : usr,isEdit : usr.id});
    }
    handleUpdateUser = () => {
        this.props.dispatch(handleUpdateUserAsync(this.state.user));
        this.setState({isEdit : null});
        this.clearForm();
        this.handleGetUsersFromStore();
    }
    handleDeleteUser = (usr) => {
        this.props.dispatch(handleDeleteUserAsync(usr));
        this.handleGetUsersFromStore();
    }
    clearForm = () => {
        this.setState({
            user: {
                fname: "",
                gender: "",
                areasOfInterest: [],
                state: ""
            }
        });
    }
    handleGetUsersFromStore = () => {
        this.props.dispatch(handleGetUserAsync())
    }
    componentDidMount() {
        this.handleGetUsersFromStore();
    }
    render() {
        const users = this.props.users
        const { fname, gender, areasOfInterest, state } = this.state.user;
        const { isEdit } = this.state;
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
                                users.map((usr) => {
                                    return (
                                        <tr key={usr.id}>
                                            <td>{usr.fname}</td>
                                            <td>{usr.gender}</td>
                                            <td>{usr.areasOfInterest.join(", ")}</td>
                                            <td>{usr.state}</td>
                                            <td>
                                                <button type="button" onClick={() => this.handleEditUser(usr)}>Edit</button>
                                            </td>
                                            <td>
                                                <button type="button" onClick={() => this.handleDeleteUser(usr)}>Delete</button>
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
                        <input type="text" name="fname" value={fname} onChange={this.handleChange} /> <br />

                        <label htmlFor="">Gender : </label>
                        <input type="radio" name="gender" value={"Male"} onChange={this.handleChange} checked={gender === "Male"} /> Male
                        <input type="radio" name="gender" value={"Female"} onChange={this.handleChange} checked={gender === "Female"} /> Female
                        <input type="radio" name="gender" value={"Others"} onChange={this.handleChange} checked={gender === "Others"} /> Others <br />

                        <label htmlFor="">Areas Of Interest : </label>
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"HTML"} checked={areasOfInterest.includes("HTML")} /> HTML
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"CSS"} checked={areasOfInterest.includes("CSS")} /> CSS
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"REACTJS"} checked={areasOfInterest.includes("REACTJS")} /> REACTJS
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"JS"} checked={areasOfInterest.includes("JS")} /> JS
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"BOOTSTRAP"} checked={areasOfInterest.includes("BOOTSTRAP")} /> BOOTSTRAP <br />

                        <label htmlFor="">State : </label>
                        <select name="state" value={state} onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="AP">AP</option>
                            <option value="TS">TS</option>
                            <option value="KA">KA</option>
                        </select>


                        <br /><br />
                        {
                            isEdit === null ? <button type="button" onClick={this.handleAddUser}>Add User</button>
                            : <button type="button" onClick={this.handleUpdateUser}>Update User</button>
                        }
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Users);

