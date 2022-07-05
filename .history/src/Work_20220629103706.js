import React, {useState, useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import { ReactComponent as Workimg } from './img/work.svg';
import Data from './Work_data';

function Work(props){
    let [portfolio, setportfolio] = useState(Data);
    return(
        <div className='work pdd-top content container'>
        <div className='article-title'>
            <p className='article-title-txt title-ft'>WORK</p>
            <Workimg fill='d44141' className='aboutTitleImg'/>
        </div>
        <div className='article-wrap flex'>
            <div className='ar-container'></div>
            <div className='article-box-wrap flex space'>
                <Link to='/workDetail/2' className='work-box work03'><img src='/img/develock.png'/></Link>
                <Link to='/workDetail/1' className='work-box work02'><img src='/img/ziqnft.png'/></Link>
                <Link to='/workDetail/0' className='work-box work01'><img src='/img/ziqworld.png' /></Link>
            </div>
        </div>
        <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}


export default Work;