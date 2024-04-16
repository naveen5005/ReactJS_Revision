import React, { Component } from 'react'

export default class ReUsableClassComp extends Component {
    constructor(props) {
      super(props)
      this.state = {
         fname : "naveen"
      }
    }
    handleFullName = () =>{
        this.setState({fname : "kavya"})
    }
  render() {
    const {fname} = this.state;
    return (
      <div>
        {
            this.props.render(fname,this.handleFullName)
        }
      </div>
    )
  }
}
