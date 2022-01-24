import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Goodbye ;('
      }

     // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Hello :)'
    //     })
    // }
    clickHandler = () => {
        this.setState({
            message: 'Goodbye again!'
        })
    }

  render() {
    return <div>
        <div>{this.state.message}</div> 
        {/* <button onClick={this.clickHandler.bind(this)}>Click-eventbind</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click-eventbind</button> */}
        <button onClick={this.clickHandler}>Click-eventbind</button>

    </div>;
  }
}

export default EventBind;

// 3 approaches: 
// 1) Binding in the render method Line 25
// 2) useing arrow functions in the render method, using (). Line 26
// 3) (in official react doc) binding the event handler in the constructor as 
//     opposed to in render method Line29, and Line 12. BEST PRACTICE!
// 4) use an arrow function as class property, Line 20 to Line 24 with lines 12 to 19 commented out.
// https://youtu.be/kVWpBtRjkCk
