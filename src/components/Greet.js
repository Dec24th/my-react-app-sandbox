import React from 'react';

const Greet = (props) => {
    console.log(props)
    return (
        <div>
        <h1>
            Hello {props.name}, aka {props.heroName}.
        </h1>
        <h6>This is my {props.equipment}, there are many like it</h6>
        {props.children}
    </div>
    )
}

export default Greet;