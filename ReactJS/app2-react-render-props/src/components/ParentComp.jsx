import React, { Component } from 'react'

export default class ParentComp extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
  render() {
    const{fullname,handleName} = this.props
    return (
      <div>
        <hr />
        <h2>Welcome to Parent Class Component</h2>
        <p>{fullname} is a {fullname === "naveen" ? "bad boy" : "good girl"}</p>
        <button type="button" onClick={handleName}>Change Name</button>
      </div>
    )
  }
}
