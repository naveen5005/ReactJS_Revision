import React, { Component } from 'react'
import HOCcomp from './HOCcomp'

class ParentCompHOC extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
  render() {
    const {fullname,handleName} = this.props;
    return (
      <div>
        <hr />
        <h2>Welcome to Parent class Comp HOC</h2>
        <p>{fullname} from Parent class comp - HOC</p>
        <button type="button" onClick={handleName}>Click</button>
      </div>
    )
  }
}

export default HOCcomp(ParentCompHOC)