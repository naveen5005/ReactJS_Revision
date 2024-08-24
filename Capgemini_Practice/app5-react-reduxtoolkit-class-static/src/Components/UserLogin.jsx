import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddLogin, handleDeleteLogin, handleUpdateLogin } from '../Store/userLoginSlicer'

class UserLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userLogin: {
                id: "",
                uname: "",
                pwd: ""
            },
            isEdit : null
        }
    }

    handleChange = (e) => {
        const newUserLogin = {...this.state.userLogin};
        newUserLogin[e.target.name] = e.target.value;
        this.setState({userLogin : newUserLogin});
    }
    addUserLoginDetail = () => {
        const lastIdValue = this.props.userLogins[this.props.userLogins.length-1];
        this.state.userLogin.id = lastIdValue.id + 1 ;
        console.log(this.state.userLogin)
        this.props.dispatch(handleAddLogin(this.state.userLogin));
        this.clearValues();
    }
    updateUserLoginDetail = () => {
        this.props.dispatch(handleUpdateLogin(this.state.userLogin));
        this.clearValues();
        this.setState({isEdit : null});
    }
    deleteUserLogin = (user)=>{
        this.props.dispatch(handleDeleteLogin(user));
    }
    editUserLogin = (user) => {
        this.setState({userLogin : user, isEdit : user.id});
    }
    clearValues = () => {
        this.setState({userLogin : {
            id : "",
            uname : "",
            pwd : ""
        }})
    }
    render() {
        const {uname, pwd} = this.state.userLogin;
        return (
            <div>
                <div className="form-wrapper">
                    <label htmlFor="">UserName : </label>
                    <input type="text" name="uname" value={uname} onChange={this.handleChange} /> <br />

                    <label htmlFor="">Password : </label>
                    <input type="text" name='pwd' value={pwd} onChange={this.handleChange} /> <br />

                    {
                        this.state.isEdit === null ? <button type="button" onClick={this.addUserLoginDetail}>Add User Login Detail</button>
                        : <button type="button" onClick={this.updateUserLoginDetail}>Update User Login Detail</button>
                    }
                </div> <br />
                <div className="table-wrapper">
                    <table border={2}>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.userLogins.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.uname}</td>
                                        <td>{user.pwd}</td>
                                        <td>
                                            <button type="button" onClick={()=>this.editUserLogin(user)}>edit</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={()=>this.deleteUserLogin(user)}>delete</button>
                                        </td>
                                    </tr>
                                ))
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
        userLogins: state.userLogins
    }
}
export default connect(mapStateToProps)(UserLogin);