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
          href="https://shujaakbar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Me Now
        </a>
        <a
          className="App-link"
          href="https://shujaakbar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
