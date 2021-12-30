import React from 'react'
import './skill.css'
import Separator from '../../common/separator'
import { SkillsData } from '../../data/skills'
import Skillcard from './skill-card'


function Skill() {
    const data = SkillsData;
    return (
        <div className='skills'>
            <Separator/>
            <label className='section-title'>Skills</label>
            <div className='skills-container'>
                {data.map((item) => {
                    return (
                        <div className='section-title'>
                            <label className='skill-section-title'>{item.type}</label>
                        <div className='skills-list'>
                            {item.list.map((skill) => {
                                return <Skillcard skill={skill}/>
                            })}
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skill
