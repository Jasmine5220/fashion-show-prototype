import React, { useState } from 'react';
import './Popup.css';

const getTimeAgo = (timestamp) => {
  const now = new Date();
  const seconds = Math.floor((now - timestamp) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) return `${interval} year${interval !== 1 ? 's' : ''} ago`;
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return `${interval} month${interval !== 1 ? 's' : ''} ago`;
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return `${interval} day${interval !== 1 ? 's' : ''} ago`;
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return `${interval} hour${interval !== 1 ? 's' : ''} ago`;
  interval = Math.floor(seconds / 60);
  if (interval >= 1) return `${interval} minute${interval !== 1 ? 's' : ''} ago`;
  return 'Just now';
};

const Popup = ({ comments = [], onClose, onPostComment, onDeleteComment, currentUser }) => {
  const [newComment, setNewComment] = useState('');

  const handlePostComment = () => {
    if (newComment.trim() !== '') {
      onPostComment({ username: currentUser, comment: newComment, timestamp: new Date() });
      setNewComment('');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="popup-header">
          <h2>Comments</h2>
          <button className="close-button" onClick={onClose}>✖</button>
        </div>
        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="comment-header">
                <div className="comment-user-icon">{comment.username ? comment.username[0] : '?'}</div>
                <div className="comment-user-info">
                  <span className="comment-username">{comment.username || 'Unknown'}</span>
                  <span className="comment-time">{getTimeAgo(comment.timestamp)}</span>
                </div>
              </div>
              <div className="comment-text">
                {comment.comment}
              </div>
              {comment.username === currentUser && (
                <button className="delete-button" onClick={() => onDeleteComment(index)}>Delete</button>
              )}
            </div>
          ))}
        </div>
        <div className="comment-form">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
          />
          <button onClick={handlePostComment}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
