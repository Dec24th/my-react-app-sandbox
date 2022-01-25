import React from 'react';

function Person({person}) {
    return <div>
        <h2>
            I am {person.name}, {person.age}, with {person.skill}!!!
        </h2>
    </div>;
}

export default Person;

// The list component is only responsible for rendering the list
// and the person component is only responsible for rendering person HTML
// This is the most commonly seen pattern when building applications that render lists of data.