import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleDeleteUsersAsyncAction, handleGetUsersAsyncAction, handlePostUSersAsyncAction, handleUpdateUsersAsyncAction } from '../Store/userSlicer'

class UsersClassComp extends Component {
    constructor(props) {
      super(props)
      this.state = {
         user : {
            fname : "",
            gender : "",
            areasOfInterest : [],
            state : ""
         },
         index : null
      }
    }
    
    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newUser = { ...this.state.user };
    
        if (type === "checkbox") {
            const updatedAreasOfInterest = checked
                ? [...newUser.areasOfInterest, value]
                : newUser.areasOfInterest.filter((area) => area !== value);
    
            newUser[name] = updatedAreasOfInterest;
        } else {
            newUser[name] = value;
        }
    
        this.setState({ user: newUser });
    };
    

    handleAddUSer = () =>{
        this.props.dispatch(handlePostUSersAsyncAction(this.state.user));
        this.handleClearForm();
        this.handleGetUsers();
    }

    handleClearForm = () => {
        this.setState({user:{
            fname : "",
            gender : "",
            areasOfInterest : [],
            state : ""
        }})
    }
    handleDeleteUser = (user)=>{
        this.props.dispatch(handleDeleteUsersAsyncAction(user));
        this.handleGetUsers();
    }
    handleEditUser = (usr) =>{
        this.setState({user:usr,index:usr.id});
    }
    handleUpdateUser = () =>{
        this.props.dispatch(handleUpdateUsersAsyncAction(this.state.user));
        this.handleClearForm();
        this.handleGetUsers();
        this.setState({index : null});
    }
    handleGetUsers = () =>{
        this.props.dispatch(handleGetUsersAsyncAction());
    }
    componentDidMount(){
        this.handleGetUsers();
    }
    render() {
        const {users} = this.props;
        const {fname,gender,areasOfInterest,state} = this.state.user;
        return (
            <div className='mainWindow'>
                <div className="formDisplay">
                    <form action="">
                        <label htmlFor="">FullName : </label>
                        <input type="text" name="fname" value={fname} onChange={this.handleChange} /> <br />

                        <label htmlFor="">Gender : </label>
                        <input type="radio" name="gender" onChange={this.handleChange} value={"Male"} checked={gender === "Male"} /> Male
                        <input type="radio" name="gender" onChange={this.handleChange} value={"Female"} checked={gender === "Female"} /> Female
                        <input type="radio" name="gender" onChange={this.handleChange} value={"Others"} checked={gender === "Others"} /> Others <br />

                        <label htmlFor="">Areas Of Interest : </label>
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"HTML"} checked={areasOfInterest.includes("HTML")} /> HTML
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"CSS"} checked={areasOfInterest.includes("CSS")} /> CSS
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"JS"} checked={areasOfInterest.includes("JS")} /> JS
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"BOOTSTRAP"} checked={areasOfInterest.includes("BOOTSTRAP")} /> BOOTSTRAP
                        <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"REACTJS"} checked={areasOfInterest.includes("REACTJS")} /> REACTJS <br />

                        <label htmlFor="">State : </label>
                        <select name="state" value={state} onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="AP">AP</option>
                            <option value="TS">TS</option>
                            <option value="KA">KA</option>
                        </select> <br />

                        {
                            this.state.index === null ? <button type="button" onClick={this.handleAddUSer}>Add User</button>
                            : <button type="button" onClick={this.handleUpdateUser}>Update User</button>
                        }
                    </form>
                </div>
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
                                                <button type="button" onClick={()=>this.handleEditUser(usr)}>edit</button>
                                            </td>
                                            <td>
                                                <button type="button" onClick={()=>this.handleDeleteUser(usr)}>delete</button>
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
        users : state.users
    }
}

export default connect(mapStateToProps)(UsersClassComp)