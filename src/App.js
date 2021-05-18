//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
//import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import LifeCycleA from './components/LifeCycleA'
import LifeCycleB from './components/LifeCycleB'

function App() {
  return (
    <div className="App">

      <Greet name ="Bruce" heroName="Batman">
        <p>This is Children Props</p>
        <button>Details</button>
      </Greet>
      
      <Welcome name ="Bruce" heroName="Batman"/>
    

      {/*<Hello/>*/}
      <Message/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <LifeCycleA/>
      <LifeCycleB/>
      
      
    </div>
  );
}

export default App;
