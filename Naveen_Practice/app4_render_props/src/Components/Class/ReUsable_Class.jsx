import React, { Component } from 'react'

export default class ReUsable_Class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter : 0
      }
    }
    incrementCounter = () =>{
        this.setState({counter : this.state.counter+1});
    }
    decrementCounter = () =>{
        if(this.state.counter > 0){
            this.setState({counter : this.state.counter-1});
        }
    }
    resetCounter = () => {
        this.setState({counter : 0})
    }
  render() {
    const {render} = this.props
    const {counter} = this.state;
    const {incrementCounter,decrementCounter,resetCounter} = this;
    return (
      <div>
        {
            render(counter,incrementCounter,decrementCounter,resetCounter)
        }
      </div>
    )
  }
}
