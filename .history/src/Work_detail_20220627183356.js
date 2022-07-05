import React, {useState, useEffect} from 'react';
import { useHistory,useParams } from 'react-router-dom';
import { ReactComponent as Workimg } from './img/work.svg';
import Data from './Work_data';

function WorkDetail(props){
    let findport = props.portfolio.find(function(port){
        return port.id == id
    });
    return(
        <div className='work_detail'>
        <div className='detail_top'>
            <p className='container title_ft'>WORK</p>
        </div>
        <div className='container detail_content flex'>
            <div className='detail_picture'>
            </div>
            <div className='detail_info'>
                <div className='top'>
                    <div className='flex'>
                        <h5 className='title'>{findport.title}</h5>
                        <p className='sub_title'>{findport.subtitle}</p>
                    </div>
                    <p className='contrib'>{findport.contribution}</p>
                </div>
                <div className='explain'>{findport.content}</div>
            </div>
        </div>
        <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}
function Card(){
    return(
        <div className='container detail_content flex'>
            <div className='detail_picture'>
                <img src='/img' />
            </div>
            <div className='detail_info'></div>
        </div>
    )
}

export default WorkDetail;