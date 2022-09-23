import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes} from 'react-router-dom';
import SquarePyramid from './Components/Pattern/SquarePyramid';
import DownPyramid from './Components/Pattern/DownPyramid';
import RightTriangle from './Components/Pattern/RightTriangle';
import Sumtono from './Components/Sumtono';
import About from './Components/Mains/About';
import Features from './Components/Mains/Features';
import Contact from './Components/Mains/Contact';
import Landing from './Components/Mains/Landing';
import Pattern from './Components/Mains/Pattern';
import Multiplication from './Components/Multiplication';
import Palindrome from './Components/Palindrome';
import OperatorCalc from './Components/OperatorCalc';
import Fibonacci from './Components/Fibonacci';
import Swapping from './Components/Swapping';
import Reversestring from './Components/Reversestring';
import EvenorOdd from './Components/EvenorOdd';
import Factors from './Components/Factors';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <App/>
    <div className=''>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Landing' element={<Landing/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Pattern' element={<Pattern/>}/>
        <Route path='/Features' element={<Features/>}/>
        <Route path='/Download' element={<Contact/>}/>
        <Route path='/SquarePyramid' element={<SquarePyramid/>}/>
        <Route path='/DownPyramid' element={<DownPyramid/>}/>
        <Route path='/RightTriangle' element={<RightTriangle/>}/>
        <Route path='/Sumtono' element={<Sumtono/>}/>
        <Route path='/Multiplication' element={<Multiplication/>}/>
        <Route path='/Palindrome' element={<Palindrome/>}/>
        <Route path='/OperatorCalc' element={<OperatorCalc/>}/>
        <Route path='/Fibonacci' element={<Fibonacci/>}/>
        <Route path='/Swapping' element={<Swapping/>}/>
        <Route path='/Reversestring' element={<Reversestring/>}/>
        <Route path='/EvenorOdd' element={<EvenorOdd/>}/>
        <Route path='/Factors' element={<Factors/>}/>
      </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
