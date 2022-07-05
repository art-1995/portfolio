import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Aboutimg } from './img/about.svg';

function About(){
    return(
        <div className='about pddtop container'>
            <div className='article_title'>
                <p className='article_title_txt'>ABOUT</p>
                <Aboutimg fill='d44141' className='aboutTitleImg'/>
            </div>
            <div className='top'>
                <p>mypage</p>f
            </div>
        </div>
    )
}

export default About;