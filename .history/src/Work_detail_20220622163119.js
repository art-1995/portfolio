import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Workimg } from './img/work.svg';
import Data from './Work_data';

function WorkDetail(){
    let [portfolio, setportfolio] = useState(Data);
    console.log(portfolio);
    return(
        <div className='work_detail'>
        <div className='detail_top'>
            <p className='container title_ft'>WORK</p>
        </div>
        <div className='container detail_content flex'>
            <div className='detail_picture'>
            </div>
            <div className='detail_info'></div>
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