import React from 'react';
import Person from './Person';

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Adam',
            age: '21 years old',
            skill: 'React'
        },
        {
            id: 2,
            name: 'Brian',
            age: '22 years old',
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Clark',
            age: '23 years old',
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => <Person person={person} />)
    return <div>{personList}</div>
}

export default NameList;
