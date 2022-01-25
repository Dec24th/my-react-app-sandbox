//import logo from './logo.svg';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <NameList />    
          <UserGreeting />
          <ParentComponent />
          <EventBind />
        <FunctionClick /> 
        <ClassClick /> 
         <Hello />
         <Greet name="Bruce" heroName="Batman" equipment="rifle">
           <p>This is children props</p>
         </Greet>

         <Greet name="Clark" heroName="Superman" equipment="sabre">
          <button>Click me!</button>
         </Greet>

         <Greet name="Diana" heroName="WonderWoman" equipment="rifle2" /> 


         <Welcome name="Bruce" heroName="Batman"/> 
         <Welcome name="Clark" heroName="Superman"/> 
         <Welcome name="Diana" heroName="WonderWoman"/>

        <Message />
        <Counter />
        </p> 
      </header>
    </div>
  );
}

export default App;
