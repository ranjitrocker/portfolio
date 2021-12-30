import React from 'react'
import './about.css'
import Socialcontact from '../../common/social-contact/index'
function About() {
    return (
        <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                Hello There 👋 I am<br/> <span className='info-name'>Ranjit Behera</span> 
                <br/>I love experiment with web.
            </div>
            <div className='about-photo'>
                <img src={require("../../../assest/coding.png")} alt='mainimage' className='picture'/>
            </div>

        </div>
        <div>
        <Socialcontact/>
        </div>
            <div className='about-bottom'></div>
        </div>
    )
}

export default About
