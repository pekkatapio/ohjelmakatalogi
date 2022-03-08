import './App.css';
import SystemLabel from './components/SystemLabel';
import SystemIcon from './components/SystemIcon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>Basename: {process.env.REACT_APP_BASENAME}</div>
        <div>
          <SystemLabel id="Windows" />
          <SystemIcon id="OSX" />
        </div>
      </header>
    </div>
  );
}

export default App;
