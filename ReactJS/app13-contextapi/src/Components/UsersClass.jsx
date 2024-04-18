import React, { Component } from 'react'
import { Context } from '../Context/context'

export default class UsersClass extends Component {

    render() {
        return (
            <div>
                <Context.Consumer>
                    {
                        ({fullName,handleChangeFullName}) => {
                            return (
                                <>
                                    <h1>Welcome to the Class Component</h1>
                                    <h2>Hi, I am {fullName} </h2>
                                    <button type="button" onClick={handleChangeFullName}>Click</button>
                                </>
                            )
                        }
                    }
                </Context.Consumer>
            </div>
        )
    }
}
