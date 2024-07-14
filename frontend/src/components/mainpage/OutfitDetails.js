import React, { useEffect, useState } from "react";
import axios from "axios";
import { useInterval } from './IntervalContext';
import './OutfitDetails.css';

const OutfitDetails = () => {
    const [items, setItems] = useState([]);
    const [outfits, setOutfits] = useState([]);
    const [currentOutfitIndex, setCurrentOutfitIndex] = useState(0);
    const [seeMoreVisible, setSeeMoreVisible] = useState(true);
    const [fadeTransition, setFadeTransition] = useState(false);
    const tick = useInterval();

    useEffect(() => {
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

    useEffect(() => {
        if (outfits.length > 0) {
            setFadeTransition(true);
            setTimeout(() => {
                setCurrentOutfitIndex(prevIndex => (prevIndex + 1) % outfits.length);
                setFadeTransition(false);
                setSeeMoreVisible(true);
            }, 500);
        }
    }, [tick, outfits]);

    const currentOutfit = outfits[currentOutfitIndex];

    const handleSeeMoreClick = () => {
        setSeeMoreVisible(false);
    };

    return (
        <div className={`outfit-details ${fadeTransition ? 'fade-out' : 'fade-in'}`}>
            {currentOutfit && (
                <div className="outfit-card" key={currentOutfit._id}>
                    <h1 className="outfit-title">In this Outfit</h1>
                    <div className="items-container">
                        {currentOutfit.items.map((itemName, index) => {
                            const item = items.find(i => i.name === itemName);
                            return (
                                item && (
                                    <div className={`item-card ${fadeTransition ? 'fade-out' : 'fade-in'}`} key={index}>
                                        <img src={`${item.imageUrl}`} alt={item.name} className="item-image"/>
                                        <div className="item-details">
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                            <p className="price">
                                                <span className="discounted-price">₹{item.discount_price}</span>
                                                <span className="original-price">₹{item.price}</span>
                                                <span className="discount">({item.discount})</span>
                                            </p>
                                            <p className="rating">Rating: {item.rating}</p>
                                            <p className="coupon-code">Coupon Code: {item.coupon_code}</p>
                                            <p className="best-price">Best Price: {item.best_price}</p>
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
                    {seeMoreVisible && (
                        <div className="see-more" onClick={handleSeeMoreClick}>
                            <p>See more</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default OutfitDetails;
