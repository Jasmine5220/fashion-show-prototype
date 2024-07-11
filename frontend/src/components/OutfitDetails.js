import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OutfitDetails.css';

const OutfitDetails = () => {
    const [outfits, setOutfits] = useState([]);

    useEffect(() => {
        const fetchOutfits = async () => {
            try {
                const response = await axios.get('http://localhost:5000/outfits');
                setOutfits(response.data);
            } catch (error) {
                console.error('Error fetching outfits:', error);
            }
        };

        fetchOutfits();
    }, []);

    return (
        <div className="outfit-details">
            {outfits.map((outfit) => (
                outfit.items.map((item) => (
                    <div key={item._id} className="outfit-card">
                        <div className="item-details">
                            <img src={item.image} alt={item.name} className="item-image" />
                            <div className="item-info">
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <div className="item-pricing">
                                    <span className="item-price">₹{item.price}</span>
                                    <span className="item-discount-price">₹{item.discount_price}</span>
                                    <span className="item-discount">{item.discount}</span>
                                </div>
                                <p className="item-rating">Rating: 4.5 (based on 120 ratings)</p>
                            </div>
                        </div>
                        <div className="outfit-info">
                            <p>Likes: {outfit.likes}</p>
                            <button className="wishlist">
                                {outfit.wishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                            </button>
                        </div>
                    </div>
                ))
            ))}
        </div>
    );
};

export default OutfitDetails;
