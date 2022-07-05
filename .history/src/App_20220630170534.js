/*eslint-disable*/
import React, {useState, useEffect,useContext} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
// import'./dist/App.css';
import './App.scss';
import About from './About'
import Work from './Work'
import WorkDetail from './Work_detail';
import Data from './Work_data';
import Contect from './Contect';

function App() {
  let [portfolio, setportfolio] = useState(Data);
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Main></Main>
        </Route>
        <Route path='/about'>
          <div id='about'>
            <About />
            <Nav />
          </div>
        </Route>
        <Route path='/work'>
          <div id='work'>
            <Work />
            <Nav />
          </div>
        </Route>
        <Route path='/contect'>
          <div id='contect'>
            <Contect />
            <Nav />
          </div>
        </Route>
        <Route path='/workDetail/:id'>
          <WorkDetail portfolio={portfolio} />
        </Route>
      </Switch>
    </div>
  );
}

function Main(){
  let [slide, setSlide] = useState(false);
  return(
    <div className='main container'>
      <nav className={`slide-nav ${slide ? 'active' : ''}`}>
        <div className='slide-navBox'>
          <div className='slide-nav-list flex column'>
            <Link to='/' onClick={() => {setSlide(false)}}>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/work'>WORK</Link>
            <Link to='/contect'>CONTECT</Link>
          </div>
        </div>
        <div className='slide-navBox'>
          <button onClick={()=> {setSlide(false)}} className='exit'>
            <div></div>
            <div></div>
          </button>
        </div>
      </nav>
      <div className='tit-ft main-top'>
        <p>MARKUP</p>
        <p>PORTFOLIO</p>
      </div>
      <button onClick={()=> {setSlide(true)}} className='ani-menu-wrap'>
        <div className='ani-menu'>
          <ul className='ani-round'>
            <li className='dot'></li>
            <li className='dot'></li>
            <li className='dot'></li>
            <li className='dot'></li>
          </ul>
          <div className='main-btn flex space align-center column'>
            <ul className='main-btn-dot flex space'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className='main-btn-dot flex space'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className='main-btn-dot flex space'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className='main-btn-dot flex space'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </button>
    </div>
  );
}

function Nav(){
  
  return(
    <nav className='nav-var container tit-ft flex align-center' id='gnbNav'>
      <Link to='/'>HOME</Link>
      <Link to='/about'>ABOUT</Link>
      <Link to='/work'>WORK</Link>
      <Link to='/contect'>CONTECT</Link>
    </nav>
  )
}

export default App;
