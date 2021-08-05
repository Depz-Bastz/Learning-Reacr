import React from 'react'
import Person from './Person'

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
    const namelist = persons.map(person => <Person person={person} />)
    return (
        <div>
            {namelist}
        </div>
    )
}

export default Namelist
