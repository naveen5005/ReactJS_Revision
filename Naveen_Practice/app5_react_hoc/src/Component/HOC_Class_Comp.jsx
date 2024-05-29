import React from 'react'
import { Component } from 'react'

const HOC_Class_Comp = (OriginalComponent) => {
  
class NewComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname : "naveen",
         counter : 0
      }
    }
    
    handleFnameChange = () => {
        this.setState({fname : "kavya"});
    }
    handleIncrement = () => {
        this.setState({counter : this.state.counter+1});
    }
    handleDecrement = () => {
        this.setState({counter : this.state.counter-1});
    }
    handleReset = () => {
        this.setState({counter : 0});
    }
    render() {
      return <OriginalComponent
        fname = {this.state.fname}
        handleFnameChange = {this.handleFnameChange}

        counter = {this.state.counter}
        handleIncrement = {this.handleIncrement}
        handleDecrement = {this.handleDecrement}
        handleReset = {this.handleReset}
      />
    }
  }
  return NewComponent;
}

export default HOC_Class_Comp
