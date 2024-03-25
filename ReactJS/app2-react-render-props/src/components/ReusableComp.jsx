import React, { Component } from 'react'

export default class ReusableComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: "naveen"
        }
    }
    handleName = () => {
        this.setState({ fullname: "Kavya" });
    }
    render() {
        return (
            <div>
                {
                    this.props.render(this.state.fullname,this.handleName)
                }
            </div>
        )
    }
}
