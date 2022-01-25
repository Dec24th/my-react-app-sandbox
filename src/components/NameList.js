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
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <div>{personList}</div>
}

export default NameList;

//keys are spcial string attribute you need to inlcude when creating lists of elements
//keys give the lmnts a stable identity
//keys help react id which items have changed, added, or removed.
//much more efficient update of the user interface
//try avoiding {index} as a key.
//react uses index as the key, if not specified. which can be bad UI exp
// https://youtu.be/0sasRxl35_8 
