import React, { Component } from 'react'

class Shortcircuitoperator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        return this.state.isLoggedIn && <div>Welcome Deepak</div>
    }
}

export default Shortcircuitoperator
