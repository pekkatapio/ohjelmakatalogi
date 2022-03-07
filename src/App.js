import './App.css';
import System from './components/System';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {process.env.REACT_APP_BASENAME}</a>
        
      </header>
    </div>
  );
}

export default App;
