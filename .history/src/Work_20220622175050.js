import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Workimg } from './img/work.svg';
import Data from './Work_data';
import { useHistory } from 'react-router-dom';

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
                <button onClick={()=>{history.push('/workDetail' + PaymentResponse.portfolio.id)}} className='work_box work3'><img src='/img/develock.png'/></button>
                <button className='work_box work2'><img src='/img/ziqnft.png'/></button>
                <button className='work_box work1'><img src='/img/ziqworld.png' /></button>
            </div>
        </div>
        <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}


export default Work;