// src/components/Sidebar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

function Sidebar() {
    const [likes, setLikes] = useState(2000);
    const [comments, setComments] = useState(567);
    const [saved, setSaved] = useState(300);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleComment = () => {
        setComments(comments + 1);
    };

    const handleSave = () => {
        setSaved(saved + 1);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-item" onClick={handleLike}>
                <FontAwesomeIcon icon={faThumbsUp} />
                <span>{likes}</span>
            </div>
            <div className="sidebar-item" onClick={handleComment}>
                <FontAwesomeIcon icon={faComment} />
                <span>{comments}</span>
            </div>
            <div className="sidebar-item" onClick={handleSave}>
                <FontAwesomeIcon icon={faBookmark} />
                <span>{saved}</span>
            </div>
        </div>
    );
}

export default Sidebar;