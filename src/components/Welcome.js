import React, { Component } from 'react'; 

class Welcome extends Component { 
    render(){
        const {name, heroName, equipment, children} = this.props;
        //const {state1, state2} = this.state
        return <h1>Welcome {name} aka {heroName} from Welcome.js</h1>
    }
}

export default Welcome;