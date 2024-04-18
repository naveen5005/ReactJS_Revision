import React, { Component } from 'react'
import HOCcomp from './HOCcomp'

class ClickCounterClass extends Component {
    constructor(props) {
      super(props)
        console.log(props)
      this.state = {
         
      }
    }
    
  render() {
    const {counter,handleIncrement,handleDecrement,handleReset} = this.props;
    return (
      <div>
        <h2>Counter is {counter}</h2>
        <button type="button" onClick={handleIncrement}>Increment</button>
        <button type="button" onClick={handleDecrement}>Decrement</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </div>
    )
  }
}

export default HOCcomp(ClickCounterClass)
