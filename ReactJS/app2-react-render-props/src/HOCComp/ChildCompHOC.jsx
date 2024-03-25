import React from 'react'
import HOCcomp from './HOCcomp'

const ChildCompHOC = ({fullname,handleName}) => {
  return (
    <div>
      <hr />
      <h2>Welcome to Child class comp HOC</h2>
      <p>{fullname} from Child class comp - HOC</p>
      <button type="button" onClick={handleName}>Click</button>
    </div>
  )
}

export default HOCcomp(ChildCompHOC)
