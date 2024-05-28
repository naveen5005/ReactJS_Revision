import React, { Component } from 'react'

export default class HoverCounterClass extends Component {
  render() {
    const {counter, incrementCounter, decrementCounter, resetCounter} = this.props;
    return (
      <div>
        <p>Hover Counter {counter}</p>
        <button type="button" onMouseOver={incrementCounter}>inc</button>
        <button type="button" onMouseOver={decrementCounter}>dec</button>
        <button type="button" onMouseOver={resetCounter}>reset</button>
      </div>
    )
  }
}
