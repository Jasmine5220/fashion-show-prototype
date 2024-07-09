// src/components/FashionShow.js
import React from 'react';
import './FashionShow.css';
import Sidebar from './Sidebar';

function FashionShow({ videoUrl }) {
    return (
        <>
            <section className="fashion-show">
                <h1>Introducing Virtual Fashion Shows</h1>
                <h2 className="check-trends">CHECK OUT TOP TRENDS</h2>
                <div className="video-wrapper">
                    <video src={videoUrl} controls></video>
                </div>
            </section>
            <Sidebar />
        </>
    );
}

export default FashionShow;
