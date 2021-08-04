import React, { Component } from 'react'

class Ternarycondition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        return (
            this.state.isLoggedIn ?
            <div>Welcome Deepak</div> :
            <div>Welcome Guest</div>
        )
    }
}

export default Ternarycondition
