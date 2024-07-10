import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleDeleteUserAsyncActions, handleGetUsersAsyncActions, handlePostUserAsyncActions, handleUpdateUserAsyncActions } from '../Store/actions'

class UsersClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user : {
            fname :"",
            gender : "",
            areasOfInterest : [],
            state : ""
         },
         isEdit : null
      }
    }

    handleChange = (e) =>{
        const newUser = {...this.state.user};
        if(e.target.name === "areasOfInterest"){
            const updateAreasOfInterest = [...newUser.areasOfInterest];
            if(e.target.checked){
                updateAreasOfInterest.push(e.target.value);
            }else{
                const index = updateAreasOfInterest.indexOf(e.target.value);
                updateAreasOfInterest.splice(index,1);
            }
            newUser.areasOfInterest = updateAreasOfInterest;
        }else{
            newUser[e.target.name] = e.target.value;
        }
        this.setState({user : newUser});
    }
    handleAddUser = () => {
        this.props.dispatch(handlePostUserAsyncActions(this.state.user));
        this.clearFormValues();
    }
    handleDeleteUser = (usr) =>{
        this.props.dispatch(handleDeleteUserAsyncActions(usr));
    }
    handleEditUser = (usr) =>{
        this.setState({user : usr, isEdit : usr.id})
    }
    handleUpdateUser = () =>{
        this.props.dispatch(handleUpdateUserAsyncActions(this.state.user));
        this.clearFormValues();
        this.setState({isEdit : null});
    }
    clearFormValues = () =>{
        this.setState({user : {
            fname :"",
            gender : "",
            areasOfInterest : [],
            state : ""
        }})
    }
    componentDidMount(){
        this.props.dispatch(handleGetUsersAsyncActions());
    }
  render() {
    console.log(this.props)
    const {users} = this.props;
    const {isEdit} = this.state;
    const {fname,gender,areasOfInterest,state} = this.state.user;
    return (
      <div className='mainComponent'>
        <div className="tableConentDisplay">
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
        <div className="formContentDisplay">
            <form action="">
                <label htmlFor="">FullName : </label>
                <input type="text" name="fname" onChange={this.handleChange} value={fname} /> <br />

                <label htmlFor="">Gender : </label>
                <input type="radio" name="gender" onChange={this.handleChange} checked = {gender === "Male"} value={"Male"} /> Male
                <input type="radio" name="gender" onChange={this.handleChange} checked = {gender === "Female"} value={"Female"} /> Female
                <input type="radio" name="gender" onChange={this.handleChange} checked = {gender === "Others"} value={"Others"} /> Others <br />

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
                    isEdit=== null ? <button type="button" onClick={this.handleAddUser}>Add User</button>
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

export default connect(mapStateToProps)(UsersClassComp);