import React, { useState } from 'react';
import { FaThumbsUp, FaComment, FaBookmark } from 'react-icons/fa';
import Popup from './Popup';
import commentsData from './commentsData';
import './Sidebar.css';

const SideBar = () => {
    const [likes, setLikes] = useState(2000);
    const [comments, setComments] = useState(commentsData);
    const [commentsCount, setCommentsCount] = useState(commentsData.length);
    const [bookmarks, setBookmarks] = useState(300);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleLike = () => {
        setLikes(likes + (liked ? -1 : 1));
        setLiked(!liked);
    };

    const handleComment = () => setIsPopupOpen(true);

    const handleBookmark = () => {
        setBookmarks(bookmarks + (saved ? -1 : 1));
        setSaved(!saved);
    };

    const togglePopup = () => setIsPopupOpen(!isPopupOpen);

    const postComment = (newComment) => {
        const updatedComments = [...comments, newComment]; // Update local state
        setComments(updatedComments);
        setCommentsCount(commentsCount + 1);

        // Persist to commentsData.js (assuming commentsData is an array)
        commentsData.push(newComment); // This mutates the array, consider a better way to persist in a real app
    };

    const deleteComment = (index) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
        setCommentsCount(commentsCount - 1);
    };

    return (
        <div className="sidebar">
            <div className={`sidebar-item ${liked ? 'liked' : ''}`} onClick={handleLike}>
                <FaThumbsUp />
                <span>{likes}</span>
            </div>
            <div className="sidebar-item" onClick={handleComment}>
                <FaComment />
                <span>{commentsCount}</span>
            </div>
            <div className={`sidebar-item ${saved ? 'saved' : ''}`} onClick={handleBookmark}>
                <FaBookmark />
                <span>{bookmarks}</span>
            </div>
            {isPopupOpen && (
                <Popup
                    comments={comments}
                    onClose={togglePopup}
                    onPostComment={postComment}
                    onDeleteComment={deleteComment}
                    currentUser="CurrentUser" // Replace this with the actual current user
                />
            )}
        </div>
    );
};

export default SideBar;
