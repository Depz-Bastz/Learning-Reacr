import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Please subscribe to our Channel.'
        }
    }
    changemessage() {
        this.setState({
            message: 'Thank you for subscribing to our channel.'
        })
    }

    render () {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changemessage()}>Subscribe</button>
            </div>
        ) 

    }
}
export default Message; 