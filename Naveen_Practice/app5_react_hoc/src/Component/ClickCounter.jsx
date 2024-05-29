import React, { Component } from 'react'
import HOC_Class_Comp from './HOC_Class_Comp'

class ClickCounter extends Component {


  render() {
    return (
      <div>
        <p>Welcome to the Click Counter - {this.props.fname}</p>
        <button type='button' onClick={this.props.handleFnameChange}>Change</button>
        <hr />
        <p>Counter value is  {this.props.counter}</p>
        <button type="button" onClick={this.props.handleIncrement}>Increment</button>
        <button type="button" onClick={this.props.handleDecrement}>Decrement</button>
        <button type="button" onClick={this.props.handleReset}>Reset</button>
      </div>
    )
  }
}

export default HOC_Class_Comp(ClickCounter);