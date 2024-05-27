import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleDeleteUserAsyncActions, handleGetUsersAsyncActions, handlePostUserAsyncActions, handlePutUserAsyncActions } from '../Store/action';

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
    
    handleChange = (e) =>{
        const newUser = {...this.state.user};
        if(e.target.name === "areasOfInterest"){
            let updatedAreasOfInterest = [...newUser.areasOfInterest]
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
    handlePostUser = () => {
        this.props.dispatch(handlePostUserAsyncActions(this.state.user));
        this.clearForm();
    }
    handleEditUser = (usr) => {
        this.setState({user : usr, index : usr.id});
    }
    handlePutUser = () => {
        this.props.dispatch(handlePutUserAsyncActions(this.state.user));
        this.clearForm();
        this.setState({index : null});
    }
    clearForm = () => {
        this.setState({user : {
            fname : "",
            gender : "",
            areasOfInterest : [],
            state : ""
        }})
    }
    componentDidMount(){
        this.props.dispatch(handleGetUsersAsyncActions());
    }
  render() {
    const {users} = this.props;
    const {fname, gender, areasOfInterest, state} = this.state.user;
    return (
      <div className='mainContainer'>
        <div className="formDisplay">
            <form action="">
                <label htmlFor="">FullName : </label>
                <input type="text" name="fname" onChange={this.handleChange} value={fname}/> <br />

                <label htmlFor="">Gender : </label>
                <input type="radio" name="gender" onChange={this.handleChange} value={"Male"} checked = {gender === "Male"}/> Male
                <input type="radio" name="gender" onChange={this.handleChange} value={"Female"} checked = {gender === "Female"}/> Female
                <input type="radio" name="gender" onChange={this.handleChange} value={"Others"} checked = {gender === "Others"}/> Others <br />

                <label htmlFor="">Areas Of Interest : </label>
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"HTML"} checked ={areasOfInterest.includes("HTML")} /> HTML
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"CSS"} checked ={areasOfInterest.includes("CSS")} /> CSS
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"JS"} checked ={areasOfInterest.includes("JS")} /> JS
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"REACTJS"} checked ={areasOfInterest.includes("REACTJS")} /> REACTJS
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} value={"BOOTSTRAP"} checked ={areasOfInterest.includes("BOOTSTRAP")} /> BOOTSTRAP <br />

                <label htmlFor="">State : </label>
                <select name="state" value={state} onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="AP">AP</option>
                    <option value="TS">TS</option>
                    <option value="KA">KA</option>
                </select> <br />

                {
                    this.state.index === null ? <button type="button" onClick={this.handlePostUser}>Add User</button>
                    : <button type="button" onClick={this.handlePutUser}>Update User</button>
                }
                
            </form>
        </div> <br />
        <div className="contentDisplay">
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
                                        <button type="button" onClick={()=>{this.handleEditUser(usr)}}>edit</button>
                                    </td>
                                    <td>
                                        <button type="button" onClick={()=>{this.props.dispatch(handleDeleteUserAsyncActions(usr))}}>delete</button>
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

function mapStateToProps(state){;
    return {
        users : state.users
    };
}

export default connect(mapStateToProps)(UsersClassComp);