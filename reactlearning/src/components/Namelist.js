import React from 'react'
import './mystyles.css'


function Namelist() {
    const persons = [
        {
            id: 1,
            name: 'Deepak',
            age: 23,
            skill: 'ReactJS'
        },
        {
            id: 2,
            name: 'Visek',
            age: 23,
            skill: 'Graphics'
        },
        {
            id: 3,
            name: 'Prakash',
            age: 23,
            skill: 'Autocad'
        }
    ]
    const namelist = persons.map((person, index) => <h2 className = 'secondary' key = {index}>ID = {index} : Name = {person.name} : age = {person.age} : skill ={person.skill}</h2>)
    return (
        <div>
            {namelist}
        </div>
    )
}

export default Namelist
