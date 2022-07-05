import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Aboutimg } from './img/about.svg';

function About(){
    return(
        <div className='about pdd-top content container'>
            <div className='article-tit'>
                <p className='article-tit-txt tit-ft'>ABOUT</p>
                <Aboutimg fill='d44141' className='abouttitImg'/>
            </div>
            <div className='article-wrap flex'>
                <div className='ar-container' />
                <div className='article-box-wrap'>
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
                    <div className='article-box'>
                        <h6 className='tit'>경력</h6>
                        <h6 className='date-tit'>2021.07 ~</h6>
                        <p className='sub-tit'>(주)디벨록 정보전산실 프론트엔드 디자이너 주임</p>
                        <p className='article'>퍼블리싱 + 디자인</p>
                        <p className='sub-article'>Figma로 디자인 시안을 공유하고 GitLab으로 개발자와 협업을 하며 UI마크업을 진행하고 있습니다.</p>
                    </div>
                    <div className='article-box2'>
                        <h6 className='tit'>학력&활동 /  자격증</h6>
                        <div className='flex'>
                            <div className='left'>
                                <div className='article-box'>
                                    <h6 className='date-tit'>2021.01 ~ 2021.06</h6>
                                    <p className='sub-tit'>웹 디자인&퍼블리싱 교육 이수</p>
                                    <p className='sub-article'>SBS 컴퓨터 아카데미</p>
                                </div>
                                <div className='article-box'>
                                    <h6 className='date-tit'>2019.03 ~ 2021.03</h6>
                                    <p className='sub-tit'>미술학과</p>
                                    <p className='sub-article'>충남대학교 일반대학원</p>
                                </div>
                                <div className='article-box'>
                                    <h6 className='date-tit'>2014.03 ~ 2019.02</h6>
                                    <p className='sub-tit'>회화과 한국화전공</p>
                                    <p className='sub-article'>충남대학교</p>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='article-box'>
                                    <h6 className='date-tit'>2016.09</h6>
                                    <p className='sub-tit'>Adobe Illustrator</p>
                                    <p className='sub-article'>ADOBE</p>
                                </div>
                                <div className='article-box'>
                                    <h6 className='date-tit'>2016.02</h6>
                                    <p className='sub-tit'>GTQ포토샵1급</p>
                                    <p className='sub-article'>한국생산성본부(KPC)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}

export default About;