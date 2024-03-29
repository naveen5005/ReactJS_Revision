import React, { Component } from 'react'
import { connect } from "react-redux";
import { handleDeleteUserAsyncData, handleGetUserAsyncData, handlePostUserAsyncData, handlePutUserAsyncData } from '../Store/usersSlice';

class UsersComp extends Component {

    constructor() {
        super();
        this.state = {
            user: {
                fname: "",
                gender: "",
                areasOfInterest: [],
                state: ""
            },
            index: null
        }
    }

    handleChange = (e) => {
        const newUser = { ...this.state.user };
        if (e.target.name === "areasOfInterest") {
            if (e.target.checked) {
                newUser.areasOfInterest.push(e.target.value);
            }
            else {
                const index = newUser.areasOfInterest.indexOf(e.target.value);
                newUser.areasOfInterest.splice(index, 1);
            }
        } else {
            newUser[e.target.name] = e.target.value;
        }
        this.setState({ user: newUser })
    }
    handleAddUser = () => {
        this.props.dispatch(handlePostUserAsyncData(this.state.user));
        this.getUserData();
        this.clearForm();
    }

    clearForm = () => {
        this.setState({
            user: {
                fname: "",
                gender: "",
                areasOfInterest: [],
                state: ""
            }
        })
    }
    getUserData = () => {
        this.props.dispatch(handleGetUserAsyncData());
    }
    handleDeleteUser = (user) => {
        this.props.dispatch(handleDeleteUserAsyncData(user));
        this.getUserData();
    }
    handleEditUser = (usr) => {
        this.setState({ user: usr, index: usr.id })
    }
    handleUpdateUser = () => {
        this.props.dispatch(handlePutUserAsyncData(this.state.user));
        this.setState({ index: null });
        this.clearForm();
        this.getUserData();
    }
    componentDidMount() {
        this.getUserData();
    }
    render() {
        const { users, dispatch } = this.props;
        const { fname, state, areasOfInterest, gender } = this.state.user;
        return (
            <div>
                <div className="formDisplay">
                    <form action="">
                        <label htmlFor="">FullName : </label>
                        <input type="text" name="fname" value={fname} onChange={this.handleChange} /> <br />
                        <label htmlFor="">Gender : </label>
                        <input type="radio" name="gender" onChange={this.handleChange} checked={gender === "Male"} value={"Male"} /> Male
                        <input type="radio" name="gender" onChange={this.handleChange} checked={gender === "Female"} value={"Female"} /> Female
                        <input type="radio" name="gender" onChange={this.handleChange} checked={gender === "Others"} value={"Others"} /> Others <br />
                        <label htmlFor="">Areas Of Interest : </label>
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked={areasOfInterest.includes("HTML")} value={"HTML"} /> HTML
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked={areasOfInterest.includes("CSS")} value={"CSS"} /> CSS
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked={areasOfInterest.includes("JS")} value={"JS"} /> JS
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked={areasOfInterest.includes("REACTJS")} value={"REACTJS"} /> REACTJS
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked={areasOfInterest.includes("BOOTSTRAP")} value={"BOOTSTRAP"} /> BOOTSTRAP <br />
                        <label htmlFor="">State : </label>
                        <select name="state" value={state} onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="AP">AP</option>
                            <option value="TS">TS</option>
                            <option value="KA">KA</option>
                        </select> <br />

                        {
                            this.state.index === null ? <button type="button" onClick={this.handleAddUser}>Add User</button> :
                                <button type="button" onClick={this.handleUpdateUser}>Update User</button>
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
                                users.map((usr, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{usr.fname}</td>
                                            <td>{usr.gender}</td>
                                            <td>{usr.areasOfInterest.join(", ")}</td>
                                            <td>{usr.state}</td>
                                            <td>
                                                <button type="button" onClick={() => this.handleEditUser(usr)}>edit</button>
                                            </td>
                                            <td>
                                                <button type="button" onClick={() => this.handleDeleteUser(usr)}>delete</button>
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
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UsersComp)