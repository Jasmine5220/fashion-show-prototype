import React from 'react';
import './Landing.css';

const Landing = ({ onImageClick }) => {
    return (
        <div className="landing">
            <div className="header">
                <div className="header-content">
                    <div className="header-right">
                        <div className="header-ticket" onClick={onImageClick}>
                            <span className="ticket-text">ENTER VIRTUAL FASHION SHOW</span>
                            <span className="ticket-subtext">Grab the best deals</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing-content">
                <img src="/fashio-event.png" alt="Fashion Show" className="landing-image" onClick={onImageClick}/>
            </div>
        </div>
    );
}

export default Landing;
