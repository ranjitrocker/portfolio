import React from 'react'
import {SocialData} from "../../data/social";
import "./social-contact.css";

function Socialcontact() {
    const data = SocialData;
    return (
        <div className='social-content'>
            {data.map((item) =>{
                return(
                    <a href={item.link}>
                        <div className='social-icon-sec'>
                            <img src = {item.icon} className='social-icon' alt='socialmedialogo'/>
                        </div>
                    </a>
                )
            })}
            
        </div>
    )
}

export default Socialcontact
