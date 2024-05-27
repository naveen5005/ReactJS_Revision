import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleDeleteUsersAsyncActions, handleGetUsersAsyncActions, handlePostUsersAsyncActions, handlePutUsersAsyncActions } from '../Store/action'

class Users extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user : {
            fname : "",
            gender : "",
            areasOfInterest :[],
            state : ""
         },
         index : null,
      }
    }
    
    handleChange = (e) =>{
        const newUser ={...this.state.user};
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
    handleDelete =(usr)=>{
        this.props.dispatch(handleDeleteUsersAsyncActions(usr));
    }
    handleEdit = (usr) =>{
        this.setState({user : usr,index : usr.id});
    }
    handleAddUser = () =>{
        this.props.dispatch(handlePostUsersAsyncActions(this.state.user));
        this.clearForm();
    }
    handleUpdateUser = () =>{
        this.props.dispatch(handlePutUsersAsyncActions(this.state.user));
        this.setState({index:null});
        this.clearForm();
    }
    clearForm = () =>{
        this.setState({user : {
            fname : "",
            gender : "",
            areasOfInterest :[],
            state : ""
         }})
    }
    componentDidMount(){
        this.props.dispatch(handleGetUsersAsyncActions());
    }
  render() {
    const {users} = this.props;
    const {fname,gender,areasOfInterest,state} = this.state.user;
    return (
      <div className='mainContainer'>
        <div className="formDisplay">
            <form action="">
                <label htmlFor="">Full Name : </label>
                <input type="text" name="fname" value={fname} onChange={this.handleChange} /> <br />
                
                <label htmlFor="">Gender : </label>
                <input type="radio" name="gender" onChange={this.handleChange} checked ={gender==="Male"} value={"Male"} /> Male
                <input type="radio" name="gender" onChange={this.handleChange} checked ={gender==="Female"} value={"Female"} /> Female
                <input type="radio" name="gender" onChange={this.handleChange} checked ={gender==="Others"} value={"Others"} /> Others <br />

                <label htmlFor="">Areas Of Interest : </label>
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked ={areasOfInterest.includes("HTML")} value={"HTML"} /> HTML 
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked ={areasOfInterest.includes("CSS")} value={"CSS"} /> CSS
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked ={areasOfInterest.includes("JS")} value={"JS"} /> JS
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked ={areasOfInterest.includes("REACTJS")} value={"REACTJS"} /> REACTJS
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked ={areasOfInterest.includes("BOOTSTRAP")} value={"BOOTSTRAP"}/> BOOTSTRAP <br />

                <label htmlFor="">State : </label>
                <select name="state"value={state} onChange={this.handleChange}>
                    <option value="">--select the state--</option>
                    <option value="AP">AP</option>
                    <option value="TS">TS</option>
                    <option value="KA">KA</option>
                </select> <br />

                {
                    this.state.index === null ? <button type="button" onClick={this.handleAddUser}>Add User</button>
                    : <button type="button" onClick={this.handleUpdateUser}>Update User</button>
                }
                
            </form>
        </div> <br /> <br />
        <div className="dataDisplay">
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
                                        <button type="button" onClick={()=>this.handleEdit(usr)}>edit</button>
                                    </td>
                                    <td>
                                        <button type="button" onClick={()=>this.handleDelete(usr)}>delete</button>
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
function mapStateToProps(state){
    console.log(state)
    return {
        users : state.users
    }
}

export default connect(mapStateToProps)(Users)