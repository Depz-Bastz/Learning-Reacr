import React, { Component } from 'react'

class BindEvent extends Component {
    constructor(props){
        super()
        this.state = {
            message: 'Hello'
        }
        this.clickhandler=this.clickhandler.bind(this)
    }
    clickhandler(){
        this.setState ({
            message: 'Goodbye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 3rd approach adding this.clickhandler=this.clickhandler.bind(this) code in constructor */}
                <button onClick={this.clickhandler}>Click</button> 
                {/* First approach to bind without adding code in construtor
                <button onClick={this.clickhandler.bind(this)}>Click</button> */}
                {/* Second approach to bind without adding code in construtor
                <button onClick={() => this.clickhandler())}>Click</button> */}

            </div>
        )
    }
}

export default BindEvent
