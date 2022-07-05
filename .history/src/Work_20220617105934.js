import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Workimg } from './img/work.svg';

function Work(){
    return(
        <div className='work pdd_top container'>
        <div className='article_title'>
            <p className='article_title_txt title_ft'>ABOUT</p>
            <Workimg fill='d44141' className='aboutTitleImg'/>
        </div>
        <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}

export default Work;