import React from 'react'
import { context } from './Context'

const UserComp = () => {
  return (
    <div>
      welcome
      {
        <context.Consumer>
            {
                ({fname})=>{
                    return(
                        <p>Good name is  <b>{fname}</b></p>
                    )
                }
            }
        </context.Consumer>
      }
    </div>
  )
}

export default UserComp
