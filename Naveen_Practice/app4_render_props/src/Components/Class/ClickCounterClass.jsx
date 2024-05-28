import React, { Component } from 'react'

export default class ClickCounterClass extends Component {

  render() {
    return (
      <div>
        <p>Counter is {this.props.counter}</p>
        <button type="button" onClick={this.props.incrementCounter}>Inc</button>
        <button type="button" onClick={this.props.decrementCounter}>Dec</button>
        <button type="button" onClick={this.props.resetCounter}>reset</button>
      </div>
    )
  }
}
