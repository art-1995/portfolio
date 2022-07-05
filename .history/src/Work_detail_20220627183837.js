import React from 'react';
import { useHistory,useParams } from 'react-router-dom';
import { ReactComponent as Workimg } from './img/work.svg';
import Data from './Work_data';

function WorkDetail(props){
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
                            <h5 className='title'></h5>
                            <p className='sub_title'></p>
                        </div>
                        <p className='contrib'></p>
                    </div>
                    <div className='explain'></div>
                </div>
            </div>
            <span className='copyright'>© 2022 LynnJ</span>
        </div>
    )
}

export default WorkDetail;