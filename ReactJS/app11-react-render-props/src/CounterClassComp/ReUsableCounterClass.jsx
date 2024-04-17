import React, { Component } from 'react'

export default class ReUsableCounterClass extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
           counter : 0
        }
      }
      
      handleIncrement = () =>{
          this.setState({counter : this.state.counter+1})
      }
      handleDecrement = () => {
          this.setState({counter : this.state.counter-1})
      }
      handleReset = () => {
          this.setState({counter : 0})
      }
  render() {
    const {counter} = this.state;
    const {handleDecrement,handleIncrement,handleReset} = this;
    return (
      <div>
        {
            this.props.render(counter,handleDecrement,handleIncrement,handleReset)
        }
      </div>
    )
  }
}
