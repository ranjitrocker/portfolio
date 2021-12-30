import React from 'react'
import "./project.css"
import {ProjectData} from "../../data/project"
import Projectcard from './project-card'
import Separator from '../../common/separator';

function Project() {
    const data = ProjectData;
    return (
        <div className='projects'>
            <Separator/>
            <label className='section-title'>Projects</label>
            <div>
                {data.map((project) => {
                    return <Projectcard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Project
