import React from 'react';

const Greet = (props) => { 
      const {name, heroName, equipment, children} = props;
    return (
        <div>
        <h1>
            Hello {name}, aka {heroName} from Greet.js
        </h1>
        <h6>This is my {equipment}, there are many like it from Greet.js</h6>
        {children}
    </div>
    )
}

export default Greet;