import React from 'react';
import { useHistory,useParams } from 'react-router-dom';
import { ReactComponent as Workimg } from './img/work.svg';
import Data from './Work_data';

function WorkDetail(props){
    let { id } = useParams();
    let findWorkData = props.portfolio.find(function(workData){
        return workData.id == id
    });
    let history = useHistory();
    return(
        <div className='work_detail'>
            <div className='detail_top'>
                <p className='container title_ft'>WORK</p>
            </div>
            <div className='container detail_content flex'>
                <div className='detail_picture'>
                    {findWorkData.img1}
                    {findWorkData.img2}
                    {findWorkData.img3}
                    {findWorkData.img4}
                </div>
                <div className='detail_info'>
                    <div className='top'>
                        <div className='flex'>
                            <h5 className='title'>{findWorkData.title}</h5>
                            <p className='sub_title'>{findWorkData.subtitle}</p>
                        </div>
                        <p className='contrib'><span>기여도 l </span>{findWorkData.contribution}</p>
                        <p className='contrib'><span>SKILL &nbsp; l </span>{findWorkData.skill}</p>
                    </div>
                    <div className='explain'>{findWorkData.content}</div>
                <button className='go_back' onClick={()=>{history.goBack()}}>GO BACK</button>
                </div>
            </div>
            <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}

export default WorkDetail;