import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Cont } from './img/develock.png';

function Contect(props){
    return(
        <div className='work pdd_top content container'>
        <div className='article_title'>
            <p className='article_title_txt title_ft'>CONTECT</p>
            <Cont />
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