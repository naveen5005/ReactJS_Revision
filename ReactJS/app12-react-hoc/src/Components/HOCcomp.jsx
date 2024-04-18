import React from 'react'

const HOCcomp = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
          super(props)
        
          this.state = {
             counter : 0
          }
        }
        handleIncrement = () =>{
            this.setState({counter : this.state.counter+1})
        }
        handleDecrement = () =>{
            this.setState({counter : this.state.counter-1})
        }
        handleReset = () =>{
            this.setState({counter : 0})
        }
      render() {
        return <OriginalComponent
        handleIncrement = {this.handleIncrement}
        handleDecrement = {this.handleDecrement}
        handleReset = {this.handleReset}
        counter = {this.state.counter}
        />
      }
    }
    
  return NewComponent
}

export default HOCcomp
