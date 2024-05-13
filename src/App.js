import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [currTime, setCurrTime] = useState(0);

  useEffect(() => {
    // get current time
    fetch('http://sampleappapi.onrender.com/api/time').then((resp) => resp.json()).then(data => {
      console.log(data);
      setCurrTime(data.time);
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and SAVE to RELOAD.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is {currTime}</p>
      </header>
    </div>
  );
}

export default App;
