import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Wardrobe.css';

const Wardrobe = ({ savedOutfits }) => {
    const [outfits, setOutfits] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchOutfitsAndItems = async () => {
            try {
                const outfitsResponse = await axios.get("http://localhost:3000/api/outfits");
                const itemsResponse = await axios.get("http://localhost:3000/api/items");
                
                const filteredOutfits = outfitsResponse.data.filter(outfit =>
                    savedOutfits.has(outfit.outfitid)
                );
                
                setOutfits(filteredOutfits);
                setItems(itemsResponse.data);
            } catch (error) {
                console.error("Error fetching outfits or items:", error);
            }
        };

        fetchOutfitsAndItems();
    }, [savedOutfits]);

    return (
        <div className="wardrobe">
            <h2>Your Virtual Wardrobe</h2>
            <div className="saved-outfits">
                <h3>Saved Outfits:</h3>
                <pre>{JSON.stringify(Array.from(savedOutfits), null, 2)}</pre>
            </div>
            {outfits.map(outfit => (
                <div className="outfit-row" key={outfit.outfitid}>
                    {outfit.items.map(itemName => {
                        const item = items.find(i => i.name === itemName);
                        return (
                            item && (
                                <div className="item-card" key={item._id}>
                                    <img src={item.imageUrl} alt={item.name} className="item-image"/>
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
            ))}
        </div>
    );
};

export default Wardrobe;
