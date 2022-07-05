import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Aboutimg } from './img/about.svg';

function About(){
    return(
        <div className='work pddtop container'>
        <div className='article_title'>
            <p className='article_title_txt titleFt'>ABOUT</p>
            <Aboutimg fill='d44141' className='aboutTitleImg'/>
        </div>
        </div>
    )
}

export default About;