import React, { Component } from 'react';

class ClassClick extends Component {

    clickHandler() {
        console.log('button clicked');
    }

  render() {
    return <div>
        <button onClick={this.clickHandler}>Click me, Class!</button> 
    </div>;
  }
}

export default ClassClick;
