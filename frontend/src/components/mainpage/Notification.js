import React from 'react';
import './Notification.css';

const Notification = ({ message }) => {
    return (
        <div className="notification">
            {message}
        </div>
    );
};

export default Notification;
