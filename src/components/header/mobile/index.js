import React from 'react'
import "./mobile.css"

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
           <div className="close-icon" onClick={() =>setIsOpen(!isOpen)}>
           <i class="fi fi-rr-cross-circle"></i>
           </div>
           <div className="mobile-options">
           <div className="mobile-option">
                <a href="#project">
                <i class="fi fi-rr-edit-alt option-icon">Projects</i>
                </a>
            </div>
            <div className="mobile-option">
                <a href="#Skills">
                <i class="fi fi-rr-laptop option-icon">Skills</i>
                </a>
            </div>
            <div className="mobile-option">
                <a href="#Work">
                <i class="fi fi-rr-briefcase option-icon">Work</i>
                </a>
            </div>
            <div className="mobile-option">
                <a href="#Contact">
                <i class="fi fi-rr-user option-icon">Contact</i>
                </a>
            </div>

           </div>
        </div>
    )
}

export default Mobile
