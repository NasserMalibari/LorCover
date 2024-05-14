import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import ProgressPage from './pages/ProgressPage';

function App() {
  const [currTime, setCurrTime] = useState(0);

  useEffect(() => {
    // get current time
    fetch('https://sampleappapi.onrender.com/api/time').then((resp) => resp.json()).then(data => {
      console.log(data);
      setCurrTime(data.time);
    })
  }, []);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProgressPage />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
      </Routes>
    
    </BrowserRouter>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <Page1 />
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hi Holly.
    //       {/* Edit <code>src/App.js</code> and SAVE to RELOAD. */}
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <p>The current time is {currTime}</p>
    //   </header>
    // </div>
  );
}

export default App;
