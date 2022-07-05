import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Aboutimg } from './img/about.svg';

function About(){
    return(
        <div className='about pddtop container'>
            <div className='article_title'>
                <p className='article_title_txt titleFt'>ABOUT</p>
                <Aboutimg fill='d44141' className='aboutTitleImg'/>
            </div>
            <div className='article_wrap flex'>
                <div className='ar_container' />
                <div className='article_box'>
                    <h6 className='title'>소개</h6>
                    <p className='sub_title'>정서린 SEO-LYNN JEONG</p>
                    <p className='article'>
                    저는 1년 차 웹퍼블리셔(마크업 개발자) 입니다.<br />
                    단단한 구조를 설계해 감각적인 UI를 입혀 유지 보수에 최적화된 코드를 그려냅니다.<br />
                    웹 표준, 웹 접근성에 관심이 있으며 더욱 탄탄하고 역동적인 UI를 만들기 위해 학습을 병행하며 발전해나가고 있습니다.
                    </p>
                    <p className='sub_article'>
                        <span className='bold'>SKILLS_ </span>
                        HTML, CSS, SASS(SCSS), jQuery, React, Git, Figma , Photoshop, illustrator, Premiere Pro, After Effects, Blender
                    </p>
                </div>
                <div className='article_box'>
                    <h6 className='title'></h6>
                    <p className='sub_title'></p>
                    <p className='article'></p>
                    <p className='sub_article'></p>
                </div>
            </div>
        </div>
    )
}

export default About;