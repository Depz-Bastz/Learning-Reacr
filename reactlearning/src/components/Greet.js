import React from 'react';

const Hello = props => {
    console.log(props)
    return (
        <div>
            <h1>My name is {props.name} and works as {props.work}.</h1>
            <p1>{props.children}</p1>
        </div>
    )
}
export default Hello;