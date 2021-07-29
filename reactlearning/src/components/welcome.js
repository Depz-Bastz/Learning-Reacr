import React, { Component } from 'react';

class Welcome extends Component {
    render () {
        const {naame} = this.props
        return <h1>Welcome to my {naame}.</h1>
    }
}
export default Welcome; 