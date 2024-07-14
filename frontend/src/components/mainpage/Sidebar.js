import React, { useState, useEffect } from 'react';
import { FaThumbsUp, FaComment, FaBookmark } from 'react-icons/fa';
import Popup from './Popup';
import commentsData from './commentsData';
import './Sidebar.css';
import { useInterval } from './IntervalContext';

const SideBar = ({ setSavedOutfits }) => {
    const [likes, setLikes] = useState(2000);
    const [comments, setComments] = useState(commentsData);
    const [commentsCount, setCommentsCount] = useState(commentsData.length);
    const [bookmarks, setBookmarks] = useState(300);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [savedOutfitIds, setSavedOutfitIds] = useState([]);
    const tick = useInterval();

    useEffect(() => {
        setSaved(false);
        setLikes(Math.floor(Math.random() * 5000));
        setBookmarks(Math.floor(Math.random() * 500));
    }, [tick]);

    const handleLike = () => {
        setLikes(likes + (liked ? -1 : 1));
        setLiked(!liked);
    };

    const handleComment = () => setIsPopupOpen(true);

    const handleBookmark = () => {
        const currentOutfitId = Math.floor(Math.random() * 3) + 1;
        if (saved) {
            const newSavedOutfits = savedOutfitIds.filter(id => id !== currentOutfitId);
            setSavedOutfitIds(newSavedOutfits);
        } else {
            setSavedOutfitIds([...savedOutfitIds, currentOutfitId]);
        }
        setSaved(!saved);
        setBookmarks(bookmarks + (saved ? -1 : 1));
        setSavedOutfits(savedOutfitIds); // Update parent component's state
    };

    const togglePopup = () => setIsPopupOpen(!isPopupOpen);

    const postComment = (newComment) => {
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        setCommentsCount(commentsCount + 1);
        commentsData.push(newComment);
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
                    currentUser="CurrentUser"
                />
            )}
        </div>
    );
};

export default SideBar;
