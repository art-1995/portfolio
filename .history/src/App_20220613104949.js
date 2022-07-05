/*eslint-disable*/
import React, {useState, useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
// import'./dist/App.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/'>
          <Main></Main>
         </Route>
      </Switch>
    </div>
  );
}

function Main(){
  return(
    <div className='main container'>
      <div className='titleFt main_top'>
        <p>MARKUP</p>
        <p>PORTFOLIO</p>
      </div>
      <div className='ani-menu-wrap'>
        <div className='ani-menu'>
          <ul className='ani-round'>
            <li className='dot'></li>
            <li className='dot'></li>
            <li className='dot'></li>
            <li className='dot'></li>
          </ul>
          <div className='main-btn flex space align-center'>
            <ul className='main-btn-dot flex space'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </ul>
            <ul className='main-btn-dot flex space'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </ul>
            <ul className='main-btn-dot flex space'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </ul>
            <ul className='main-btn-dot flex space'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
