import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}!!!`)
  }
  
  render() {
    return <div>
      <ChildComponent greetHandler={this.greetParent} />
    </div>;
  }
}

export default ParentComponent;

// arrow function syntax is simplest way to pass parameters 
// from child compnent to parent component
// https://youtu.be/QpfyjwhY9kg?t=474

//how to pass methods as props in react comp.
//in parent, define the method.
//in child coomponent tag, pass the method as a prop
// in child comp, access the method using props object.

