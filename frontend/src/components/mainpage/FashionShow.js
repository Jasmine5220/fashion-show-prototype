import React from 'react';
import './FashionShow.css';

const FashionShow = ({ videoUrl }) => {
    return (
        <div className="fashion-show">
            <h1>Introducing Virtual Fashion Shows</h1>
            <button className="check-trends">CHECK OUT TOP TRENDS</button>
            <video className="fashion-video" controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default FashionShow;

