// src/components/OutfitItem.js
import React from 'react';
import './OutfitItem.css'; // Create this CSS file for styling

function OutfitItem({ image, title, price, discount }) {
    return (
        <div className="outfit-item">
            <img src={image} alt={title} />
            <div className="item-details">
                <h4>{title}</h4>
                <p>{price} <span>{discount}</span></p>
                <button>Add to Bag</button>
            </div>
        </div>
    );
}

export default OutfitItem;
