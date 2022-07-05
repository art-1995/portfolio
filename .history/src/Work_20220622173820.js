import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Workimg } from './img/work.svg';
import Data from './Work_data';
import {Link, Route, Switch} from 'react-router-dom';

function Work(){
    let [portfolio, setportfolio] = useState(Data);
    return(
        <div className='work pdd_top content container'>
        <div className='article_title'>
            <p className='article_title_txt title_ft'>WORK</p>
            <Workimg fill='d44141' className='aboutTitleImg'/>
        </div>
        <div className='article_wrap flex'>
            <div className='ar_container'></div>
            <div className='article_box_wrap flex space'>
                <Link to='/workDetail/ :id' className='work_box work3'><img src='/img/develock.png'/></Link>
                <Link className='work_box work2'><img src='/img/ziqnft.png'/></Link>
                <Link className='work_box work1'><img src='/img/ziqworld.png' /></Link>
            </div>
        </div>
        <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}


export default Work;