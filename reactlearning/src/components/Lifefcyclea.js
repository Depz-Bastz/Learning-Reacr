import React, { Component } from 'react'
import Lifefcycleb from './Lifefcycleb'

class Lifefcyclea extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Deepak'
        }
        console.log('Constructor method')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Static method')
        return null
    }
    componentDidMount(){
        console.log('Mount method')
    }
    shouldComponentUpdate(){
        console.log('Component update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    changestate=()=>{
        this.setState({
            name: 'Bastola'
        })
    }

    
    render() {
        console.log('Render method')
        return (
            <div>
                <div>
                Lifecycle mounting methods
            </div>
            <Lifefcycleb />
            <button onClick={this.changestate}>Change state</button>
            </div>
        )
    }
}

export default Lifefcyclea
