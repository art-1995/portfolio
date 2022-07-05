import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Aboutimg } from './img/about.svg';

function About(){
    return(
        <div className='work pddtop container'>
        <div className='work_title'>
            <p className='work_title_txt title_ft'>WORK</p>
            <Aboutimg fill='d44141' className='aboutTitleImg'/>
        </div>
        </div>
    )
}

export default About;