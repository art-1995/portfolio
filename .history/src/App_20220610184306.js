/*eslint-disable*/
import React, {useState, useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
// import'./dist/App.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Main></Main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Main(){
  return(
    <div className='main container'></div>
  );
}

export default App;
