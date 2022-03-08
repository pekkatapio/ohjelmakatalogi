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
          <SystemLabel id="Windows" kind="magenta" />
          <SystemLabel id="Windows" kind="darkmagenta" />
          <SystemLabel id="Windows" kind="cyan" />
          <SystemLabel id="Windows" kind="darkcyan" />
          <SystemLabel id="Windows" kind="green" />
          <SystemLabel id="Windows" kind="grey" />
          <SystemLabel id="Windows" kind="lightgrey" />
          <SystemLabel id="Windows" kind="darkgrey" />
          <SystemIcon id="OSX" />
        </div>
      </header>
    </div>
  );
}

export default App;
