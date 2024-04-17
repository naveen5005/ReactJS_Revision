import React, { Component } from 'react'

export default class ClassCompCounter extends Component {

  render() {
    const {counter,handleIncrement,handleDecrement,handleReset} = this.props
    return (
      <div>
        <h2>Counter value is : {counter}</h2>
        <button type="button" onClick={handleIncrement}>Increment Counter</button>
        <button type="button" onClick={handleDecrement}>Decrement Counter</button>
        <button type="button" onClick={handleReset}>Reset Counter</button>
      </div>
    )
  }
}
