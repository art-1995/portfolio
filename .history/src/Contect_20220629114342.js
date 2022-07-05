import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Cont } from './img/contect.svg';

function Contect(props){
    return(
        <div className='work pdd-top content container'>
            <div className='article-tit'>
                <p className='article-tit-txt tit-ft'>CONTECT</p>
                <Cont fill='d44141' className='about-title-img'/>
            </div>
            <div className='article-wrap flex'>
                <div className='ar-container' />
                <div className='article-box'>
                        <h6 className='tit'>소개</h6>
                        <p className='sub-tit'>정서린 SEO-LYNN JEONG</p>
                        <p className='article'>
                        저는 1년 차 웹퍼블리셔(마크업 개발자) 입니다.<br />
                        단단한 구조를 설계해 감각적인 UI를 입혀 유지 보수에 최적화된 코드를 그려냅니다.<br />
                        웹 표준, 웹 접근성에 관심이 있으며 더욱 탄탄하고 역동적인 UI를 만들기 위해 학습을 병행하며 발전해나가고 있습니다.
                        </p>
                        <p className='sub-article'>
                            <span className='bold'>SKILLS_ </span>
                            HTML, CSS, SASS(SCSS), React, jQuery, Git, Figma , Photoshop, illustrator, Premiere Pro, After Effects, Blender
                        </p>
                    </div>
            </div>
            <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}


export default Contect;