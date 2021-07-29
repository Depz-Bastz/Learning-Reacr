import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
    increment(){
        // this.setState(
        //     {
        //     count: this.state.count + 1
        // },
        // () => {
        //     console.log('Inside Count value',this.state.count)
        // }
        // )
        // console.log('Outside Count value',this.state.count)
        this.setState(prevState => ({
            count: prevState.count + 1
        }),
        () => {
            console.log('Multiple of 5',this.state.count)
        }
        )
        
        
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render () {
        return (
        <div>
            <h1>count ={this.state.count}</h1>
            <button onClick={() => this.incrementFive()}>Increase count</button>
        </div>
        )
    }
}
export default Counter;