import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleDeleteUserAsyncActions, handleGetUsersAsyncActions, handlePostUserAsyncActions, handlePutUserAsyncActions } from '../Store/userSlice'

class Users extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user : {
            fname : "",
            gender : "",
            areasOfInterest : [],
            state : ""
         },
         isEdit :null
      }
    }
    
    handleChange = (e) => {
        const newUser = {...this.state.user};
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
        this.setState({user : newUser});
    }
    handleAddUser = () =>{
        this.props.dispatch(handlePostUserAsyncActions(this.state.user));
        this.handleGetDataFromServer();
        this.clearFormValues();
    }
    handleDeleteUser = (usr) => {
        this.props.dispatch(handleDeleteUserAsyncActions(usr));
        this.handleGetDataFromServer();
    }
    handleEditUser = (usr) =>{
        this.setState({user : usr, isEdit : usr.id});
    }
    handleUpdateUser = () =>{
        this.props.dispatch(handlePutUserAsyncActions(this.state.user));
        this.handleGetDataFromServer();
        this.clearFormValues();
        this.setState({isEdit : null});
    }
    clearFormValues = () =>{
        this.setState({user : {
            fname : "",
            gender : "",
            areasOfInterest :[],
            state : ""
        }})
    }
    componentDidMount(){
        this.handleGetDataFromServer();
    }
    handleGetDataFromServer = () =>{
        this.props.dispatch(handleGetUsersAsyncActions());
    }
  render() {
    const {users} = this.props;
    const {fname,gender,areasOfInterest,state} = this.state.user;
    const {isEdit} = this.state;
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
                                        <button type="button" onClick={()=>this.handleEditUser(usr)}>Edit</button>
                                    </td>
                                    <td>
                                        <button type="button" onClick={()=>this.handleDeleteUser(usr)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <div className="formContainer">
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
                <select name="state" onChange={this.handleChange} value={state}>
                    <option value=""></option>
                    <option value="AP">AP</option>
                    <option value="TS">TS</option>
                    <option value="KA">KA</option>
                </select> <br />

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

function mapStateToProps(state){
    return{
        users : state.users
    }
}
export default connect(mapStateToProps)(Users);