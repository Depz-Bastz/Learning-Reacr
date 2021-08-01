import React, { Component } from 'react'

export class ClassClick extends Component {
    clickhandler(){
        console.log('Class button clicked')
    }
    render() {
        return (
            <div>
                <button  onClick={this.clickhandler}>Class click</button>
            </div>
        )
    }
}

export default ClassClick
