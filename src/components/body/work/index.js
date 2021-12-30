import React from 'react'
import './work.css'
import { WorkData } from '../../data/work'
import Separator from '../../common/separator';
import Workcard from './work-card';

function Work() {
    const data = WorkData;
    return (
        <div className='work'>
            <Separator/>
            <label className='section-title'>work</label>
            <div className='work-list'>
                {data.map((item) =>{
                    return (
                        <Workcard item={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Work
