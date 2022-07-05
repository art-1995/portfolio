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
    <div className='main container'></div>
  );
}

export default App;
