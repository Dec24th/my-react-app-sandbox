import React, { Component } from 'react';

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor!',
            message2: 'Welcome Back!',
            message3: 'Thank you, come again!',
            message4: 'Like & Subscribe!'
        }
    }
    // To change the message after clicking the button.
    // This is the method you need to call to alter 
    // the state of the class component
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    changeMessage2() {
        this.setState({
            message4: 'You are now unsubscribed! Thank you'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <p>Welcome to my Page. Subscribe below</p>
                <button onClick={() => this.changeMessage()}>Subscribe!</button>
                <h2>{this.state.message4}</h2>
                <button onClick={() => this.changeMessage2()}>UNSubscribe!</button>
            </div>
        )
    }

}

export default Message;