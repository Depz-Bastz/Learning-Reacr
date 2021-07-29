import './App.css';
import Greeting from './components/hello';
import Welcome from './components/welcome';
import Hello from './components/Greet';
import Message from './components/message';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <header>
        <Counter />
        
        <Message />      
         <Welcome name="DARU.LIFE" />
        <Hello naame="Deepak Bastola" work="Student" >
          <input placeholder="Just trying options in props" />  
        </Hello>
        <Greeting name="Western Regional Campus" />
        <Hello naame="Bimal Tamang" work="Banker" > 
          <p>This is a children props.</p>
        </Hello>
        <Greeting name="PN campus" />
      </header>
    </div>
  );
}

export default App;
