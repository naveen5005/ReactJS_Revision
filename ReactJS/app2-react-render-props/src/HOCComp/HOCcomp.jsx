import React, { Component } from 'react'

const HOCcomp = (OriginalComp) => {
    class NewComp extends Component{
        constructor(){
            super();
            this.state={
                fullName : "NAVEEN"
            }
        }
        handleName = () =>{
            this.setState({fullName : "KAVYA"})
        }
        render(){
            return <OriginalComp
                fullname = {this.state.fullName}
                handleName = {this.handleName}
            />
        }
    }
  return NewComp
}

export default HOCcomp
