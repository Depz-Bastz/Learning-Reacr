import React, { Component } from 'react'

class Lifefcycleb extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Deepak'
        }
        console.log('Constructor method B')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Static method B')
        return null
    }
    componentDidMount(){
        console.log('Mount method B')
    }
    shouldComponentUpdate(){
        console.log('Component update B')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate B')
        return null
    }
    componentDidUpdate(){
        console.log('componentDidUpdate B')
    }

    
    render() {
        console.log('Render method B ')
        return (
            <div>
                Lifecycle mounting methods B
            </div>
        )
    }
}

export default Lifefcycleb