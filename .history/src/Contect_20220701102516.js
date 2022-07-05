import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Cont } from './img/contect2.svg';

function Contect(props){
    return(
        <div className='contect pdd-top content container'>
            <div className='article-tit'>
                <p className='article-tit-txt tit-ft'>CONTECT</p>
                <Cont fill='d44141' className='about-title-img'/>
            </div>
            <div className='article-wrap flex'>
                <div className='ar-container' />
                <div className='article-box'>
                        <h6 className='tit'>문의</h6>
                        <p className='sub-tit'>art_1995@daum.net</p>
                        <p className='article'>
                            메일을 보내주시면 평일 기준 3일 내로 답장을 드리겠습니다.
                        </p>
                    </div>
            </div>
            <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}


export default Contect;