import React, { Component } from 'react'
import HOC from './HOC'

class HoverCounter extends Component {
    constructor(props) {
      super(props)
      this.state = {
         
      }
    }
    
  render() {
    const {counter, handleIncrement, handleDecrement, handleReset} = this.props;
    return (
      <div>
        <h1>Hover Counter</h1>
        <p>Hover : {counter}</p>
        <button type="button" onMouseOver={handleIncrement}>Increment</button>
        <button type="button" onMouseOver={handleDecrement}>Decrement</button>
        <button type="button" onMouseOver={handleReset}>Reset</button>
      </div>
    )
  }
}

export default HOC(HoverCounter);