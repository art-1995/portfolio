import React from 'react';
import { useHistory,useParams } from 'react-router-dom';
import Data from './Work_data';

function WorkDetail(props){
    let { id } = useParams();
    let findWorkData = props.portfolio.find(function(workData){
        return workData.id == id
    });
    let history = useHistory();
    return(
        <div className='work-detail'>
            <div className='detail-top'>
                <p className='container tit-ft'>WORK</p>
            </div>
            <div className='container detail-content flex'>
                <div className='detail-picture'>
                    {findWorkData.img1}
                    {findWorkData.img2}
                    {findWorkData.img3}
                    {findWorkData.img4}
                    {findWorkData.img5}
                </div>
                <div className='detail-info'>
                    <div className='top'>
                        <div className='flex'>
                            <h5 className='tit'>{findWorkData.title}</h5>
                            <p className='sub-tit'>{findWorkData.subtitle}</p>
                        </div>
                        <p className='contrib'><span>기여도 l </span>{findWorkData.contribution}</p>
                        <p className='contrib'><span>SKILL &nbsp;l </span>{findWorkData.skill}</p>
                    </div>
                    <div className='explain'>{findWorkData.content}</div>
                    <div className='btn-box'>
                        <button className='go-btn' onClick={()=>{history.goBack()}}>GO BACK</button>
                        <button className='go-btn'><a href={findWorkData.goto} target='_blank'>VISIT SITE</a></button>
                    </div>
                </div>
            </div>
            <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}

export default WorkDetail;