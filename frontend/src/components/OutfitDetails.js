// src/components/OutfitDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import './OutfitDetails.css';

const OutfitDetails = () => {
    const [items, setItems] = useState([]);
    const [outfits, setOutfits] = useState([]);

    useEffect(() => {
        // Fetch items and outfits data from the backend
        const fetchItems = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/items");
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        const fetchOutfits = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/outfits");
                setOutfits(response.data);
            } catch (error) {
                console.error("Error fetching outfits:", error);
            }
        };

        fetchItems();
        fetchOutfits();
    }, []);

    return (
        <div className="outfit-details">
            <h1>Outfit Details</h1>
            {outfits.map(outfit => (
                <div className="outfit-card" key={outfit._id}>
                    <h2>Outfit ID: {outfit.outfitid}</h2>
                    <p>Likes: {outfit.likes}</p>
                    <div className="items-container">
                        {outfit.items.map((itemName, index) => {
                            const item = items.find(i => i.name === itemName);
                            return (
                                item && (
                                    <div className="item-card" key={index}>
                                        <img src="/path/to/image.jpg" alt={item.name} className="item-image"/>
                                        <div className="item-details">
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                            <p className="price">
                                                <span className="discounted-price">₹{item.best_price}</span>
                                                <span className="original-price">₹{item.price}</span>
                                                <span className="discount">({item.discount})</span>
                                            </p>
                                            <p className="rating">Rating: {item.rating}</p>
                                            <p className="coupon-code">Coupon Code: {item.coupon_code}</p>
                                            <div className="actions">
                                                <button className="add-to-bag">Add to Bag</button>
                                                <button className="wishlist">{item.wishlist ? "Remove from Wishlist" : "Add to Wishlist"}</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OutfitDetails;
