import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Workimg } from './img/work.svg';
import Data from './Work_data';

function WorkDetail(){
    let [portfolio, setportfolio] = useState(Data);
    return(
        <div className='work_detail pdd_top content container'>
        <div className='detail_top'>
            <p className='title_ft'>WORK</p>
        </div>
        <div className='article_wrap flex'>
            <div className='ar_container'></div>
            <div className='article_box_wrap flex space'>
                <button className='work_box work3'><img src='/img/develock.png'/></button>
                <button className='work_box work2'><img src='/img/ziqnft.png'/></button>
                <button className='work_box work1'><img src='/img/ziqworld.png' /></button>
            </div>
        </div>
        <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}

export default WorkDetail;