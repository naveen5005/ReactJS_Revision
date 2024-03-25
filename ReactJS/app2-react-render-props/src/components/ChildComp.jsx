import React from 'react'

const ChildComp = ({ fullname, handleName }) => {
    return (
        <div>
            <hr />
            <h2>Welcome to Child Functional Component</h2>
            <p>{fullname} will rule the world</p>
            <button type="button" onClick={handleName}>Click</button>
        </div>
    )
}

export default ChildComp
