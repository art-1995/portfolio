import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Cont } from './img/contect.svg';

function Contect(props){
    return(
        <div className='work pdd-top content container'>
        <div className='article-title'>
            <p className='article-title-txt title-ft'>CONTECT</p>
            <Cont fill='d44141' className='aboutTitleImg'/>
        </div>
        <div className='article-wrap flex'>
            <div className='ar-container'></div>
            <div className='article-box-wrap flex space'>
            </div>
        </div>
        <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}


export default Contect;