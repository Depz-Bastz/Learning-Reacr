import './App.css';
// import ParentComponent from './components/ParentComponent';
import Usergreeting from './components/Usergreeting';
import UserGreeting1 from './components/UserGreeting1';
import Ternarycondition from './components/Ternarycondition';
import Shortcircuitoperator from './components/Shortcircuitoperator';
// import Greeting from './components/hello';
// import Welcome from './components/welcome';
// import Hello from './components/Greet';
// import Message from './components/message';
// import Counter from './components/counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import BindEvent from './components/BindEvent';


function App() {
  return (
    <div className="App">
      <header>
      
      <Usergreeting />
      <UserGreeting1 />
      <Ternarycondition />
      <Shortcircuitoperator />
        {/* 
        <ParentComponent />
        <FunctionClick />
        <ClassClick />
        <BindEvent />
        <Counter />
        
        <Message />      
        <Welcome naame="DARU.LIFE" />
        <Hello naame="Deepak Bastola" work="Student" >
        <input placeholder="Just trying options in props" />  
        </Hello>
        <Greeting name="Western Regional Campus" />
        <Hello naame="Bimal Tamang" work="Banker" > 
        <p>This is a children props.</p>
        </Hello>
        <Greeting name="PN campus" /> */}
      </header>
    </div>
  );
}

export default App;
