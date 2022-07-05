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
        <Route path='/workDetail/:id'>
          <div id='work_detail'>
            <WorkDetail portfolio={portfolio} />
            <Nav />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

function Main(){
  let [slide, setSlide] = useState(false);
  return(
    <div className='main container'>
      <nav className={`slide_nav ${slide ? 'active' : ''}`}>
        <div className='slide_navBox'>
          <div className='slide_nav_list flex column'>
            <Link to='/' onClick={() => {setSlide(false)}}>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/work'>WORK</Link>
            <Link to='/contect'>CONTECT</Link>
          </div>
        </div>
        <div className='slide_navBox'>
          <button onClick={()=> {setSlide(false)}} className='exit'>
            <div></div>
            <div></div>
          </button>
        </div>
      </nav>
      <div className='title_ft main_top'>
        <p>MARKUP</p>
        <p>PORTFOLIO</p>
      </div>
      <button onClick={()=> {setSlide(true)}} className='ani_menu_wrap'>
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
    </div>
  );
}

function Nav(){
  
  return(
    <nav className='nav_var container title_ft flex align_center'>
      <Link to='/'>HOME</Link>
      <Link to='/about'>ABOUT</Link>
      <Link to='/work'>WORK</Link>
      <Link to='/contect'>CONTECT</Link>
    </nav>
  )
}

export default App;
