import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Cont } from './img/work.svg';

function Contect(props){
    return(
        <div className='work pdd_top content container'>
        <div className='article_title'>
            <p className='article_title_txt title_ft'>CONTECT</p>
            <Cont fill='d44141' className='aboutTitleImg'/>
        </div>
        <div className='article_wrap flex'>
            <div className='ar_container'></div>
            <div className='article_box_wrap flex space'>
            </div>
        </div>
        <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}


export default Contect;