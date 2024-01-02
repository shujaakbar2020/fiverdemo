import fiverr from './fiverr.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fiverr} className="App-logo" alt="logo" />
        <p>
          Hello fiverr, You want's to live your application.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </header>
    </div>
  );
}

export default App;
