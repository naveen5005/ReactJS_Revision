import React, { Component } from 'react'

export default class ParentClassComp extends Component {
    constructor(props) {
      super(props)
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <h2>Welcome to Parent class component</h2>
        <p>Hello, {this.props.fname}</p>
        <button type="button" onClick={this.props.handleFullName}>Click Me</button>
      </div>
    )
  }
}
