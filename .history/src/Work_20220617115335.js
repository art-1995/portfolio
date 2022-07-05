import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Workimg } from './img/work.svg';

function Work(){
    return(
        <div className='work pdd_top content container'>
        <div className='article_title'>
            <p className='article_title_txt title_ft'>WORK</p>
            <Workimg fill='d44141' className='aboutTitleImg'/>
        </div>
        <div className='artice_wrap flex'>
            <div className='ar_container'></div>
            <div className='article_box_wrap'></div>
        </div>
        <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}

export default Work;