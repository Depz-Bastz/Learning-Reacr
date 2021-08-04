import React, { Component } from 'react'
// If else approach

class Usergreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        if(this.state.isLoggedIn){
            return (
                <div>
                    Welcome Deepak
                </div>
            )
        }else{
            return (
                <div>
                    Welcome Guest
                </div>
            )
        }
        
    }
}

export default Usergreeting
