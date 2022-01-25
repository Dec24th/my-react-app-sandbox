import React from 'react';

const Hello = (props) => {
    const {name, company} = props 
    return (
        <div>
            <h1>Hello from Hello.js!</h1>
            <p>This Bitter Earth</p> 
            <p>This {name} Earth {company}</p>   
        </div>
    )
}

export default Hello;





/* Original 1.24.2022 / 11pm
import React from 'react';

const Hello = () => {
    return (
        <div>
            <h1>Hello from Hello.js!</h1>
            <p>This Bitter Earth</p> 
        </div>
    )
}

export default Hello; */