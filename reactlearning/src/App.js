import './App.css';
import Greeting from './components/hello';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <header>
        <Welcome />
        <Greeting />
      </header>
    </div>
  );
}

export default App;
