//from https://youtu.be/uirRaVjRsf4
import React, { Component } from 'react';

class Counter extends Component {

    //snippet for constructor is rconst
    constructor(props) {
        super(props)

        this.state = {
            count: 0 //proeprty count initialized to zero
        }
    }

    
    increment() {
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => {
        //         console.log('Callback Value is', this.state.count);
        //     }
        // )
/*
    src="https://youtu.be/uirRaVjRsf4?t=447"
    setState() has two parameters, first is the state object. 
    the 2nd is the call back function --which is an arrow function.
    //whenever you need to execute some code after the state has been change,
    //do not place that code right after the setState() method
    //instead place that code within the callback function that is passed
    //as a 2nd parameter to the setState() method.
    */
        this.setState((prevState)=> ({
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }
    // When you have to update the state based on previous state
    // make sure to pass in a function as an argument, instead of a regular object
    // the function has access to the previous state, which can be used to calculate the new state
    // the 2nd parameter to this function is the props object!

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }




    render() {
        return (
            <div>
                <div>COUNT = {this.state.count} </div>
                <button onClick={() => this.incrementFive()}> Increment </button>
            </div>
        );
    }
}

export default Counter;
