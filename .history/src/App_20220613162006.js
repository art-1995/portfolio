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
  let [slide, slideChange] = useState(false);
  return(
    <div className='main container'>
      <nav className='slide_nav active'>
        <div className='slide_navBox active'>
          <div className='slide_nav_list flex column'>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/work'>WORK</Link>
            <Link to='/contect'>CONTECT</Link>
          </div>
        </div>
        <div className='slide_navBox active'>
          <button className='exit'>
            <div></div>
            <div></div>
          </button>
        </div>
      </nav>
      <div className='titleFt main_top'>
        <p>MARKUP</p>
        <p>PORTFOLIO</p>
      </div>
      <button onClick={()=> {slideChange(true)}} className='ani_menu_wrap'>
        <div className='ani_menu'>
          <ul className='ani_round'>
            <li className='dot'></li>
            <li className='dot'></li>
            <li className='dot'></li>
            <li className='dot'></li>
          </ul>
          <div className='main_btn flex space align_center column'>
            <ul className='main_btn_dot flex space'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className='main_btn_dot flex space'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className='main_btn_dot flex space'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className='main_btn_dot flex space'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </button>
      {
        slide === true
        ? <nav className='slide_nav' />
        : null
      }
    </div>
  );
}

export default App;
