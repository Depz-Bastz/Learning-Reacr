import React, { Component } from 'react';
import Childcomponent from './Childcomponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentname: 'Ishwori'
        }
        this.GreetParent = this.GreetParent.bind(this)
    }
    
    GreetParent(childName) {
        alert(`Hello ${this.state.parentname} from ${childName}`)
        console.log(this.state.parentname)
    }
    render() {
        return (
            <div>
                <Childcomponent greethandler={this.GreetParent} />
            </div>
        )
    }
}

export default ParentComponent

