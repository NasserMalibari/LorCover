import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import ProgressPage from './pages/ProgressPage';
import RiotText from './pages/RiotText';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/riot' element={<>1fbc4f61-eeba-4ad2-8b2b-f7efbffa9fe7</>}></Route>
        <Route path='/' element={<ProgressPage />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
