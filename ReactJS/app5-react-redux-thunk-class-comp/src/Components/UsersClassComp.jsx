import React, { Component } from 'react'
import { connect } from "react-redux";
import { handleDeleteUserDataAsync, handleGetUsersDataAsync, handlePostUserDataAsync, handlePutUserDataAsync } from '../Store/actions';

class UsersClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        fname: "",
        gender: "",
        areasOfInterest: [],
        state: ""
      },
      index : null
    }
  }

  handleChange = (e) => {
    const newUser = { ...this.state.user };
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
    this.setState({ user: newUser });
  }
  handleAddUser = () => {
    console.log(this.state.user);
    this.props.dispatch(handlePostUserDataAsync(this.state.user));
    this.clearFormValues();
  }
  clearFormValues = () => {
    this.setState({user : {
      fname: "",
      gender:"",
      areasOfInterest: [],
      state :""
    }})
  }
  handleEditUser = (usr) =>{
    this.setState({user:usr,index : usr.id});
  }
  handleUpdateUser = () => {
    this.props.dispatch(handlePutUserDataAsync(this.state.user));
    this.setState({index : null});
    this.clearFormValues();
  }
  componentDidMount() {
    this.props.dispatch(handleGetUsersDataAsync())
  }
  render() {
    const { users, dispatch } = this.props;
    const { fname, gender, areasOfInterest, state } = this.state.user;
    const {index} = this.state;
    return (
      <div>
        <div className="formDisplay">
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
          <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked={areasOfInterest.includes("BOOTSTARP")} value={"BOOTSTARP"} /> BOOTSTARP <br />

          <label htmlFor="">State : </label>
          <select name="state" value={state} onChange={this.handleChange}>
            <option value=""></option>
            <option value="AP">AP</option>
            <option value="TS">TS</option>
            <option value="KA">KA</option>
          </select> <br />

          {
            index === null ? <button type="button" onClick={this.handleAddUser}>Add User</button> :
            <button type="button" onClick={this.handleUpdateUser}>Update User</button>
          }

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
                        <button type="button" onClick={()=>this.handleEditUser(usr)}>edit</button>
                      </td>
                      <td>
                        <button type="button" onClick={() => dispatch(handleDeleteUserDataAsync(usr))}>delete</button>
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
export default connect(mapStateToProps)(UsersClassComp)
