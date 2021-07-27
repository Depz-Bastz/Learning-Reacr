import React from 'react';

const Greeting = props => {
    console.log(props)
    return <p2>I am currently reading in {props.name}</p2>
}

export default Greeting;