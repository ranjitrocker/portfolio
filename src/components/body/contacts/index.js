import React from 'react'
import Separator from '../../common/separator'
import Socialcontact from '../../common/social-contact'
import './contacts.css'

function Contact() {
    return (
        <div className='contact'>
            <Separator/>
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch? Contact me on any of the platform</p>
                <Socialcontact/>
                 </div>
                <div className='download'>
                    <a download href = {require("../../../assest/Ranjit's Resume.pdf")}>
                    <i className='fi-rr-cloud-download download-icon'></i>Download Resume
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact
