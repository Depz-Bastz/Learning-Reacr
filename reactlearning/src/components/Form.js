import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             gender: 'Male'
        }
    }
    handleusername = (event) => {
        this.setState ({
            username: event.target.value
        })
    }
    handlecommentchange = (event) => {
        this.setState ({
            comments: event.target.value
        })
    }
    handlegenderchange = (event) => {
        this.setState ({
            gender: event.target.value
        })
    }
    submithandler = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.gender}`)
    }

    
    
    render() {
        return (
           <form onSubmit={this.submithandler}>
               <div>
                   <label>Username</label>
                   <input type='text' value={this.state.username} onChange={this.handleusername} />
               </div>
               <div>
                   <label>Comments</label>
                   <textarea value={this.state.comments} onChange={this.handlecommentchange} />
               </div>
               <div>
                   <label>Gender</label>
                   <select value={this.state.gender}>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value ="others">Others</option>  
                   </select>
               </div>
               <button type="submit">Submit</button>
           </form>
        )
    }
}

export default Form
