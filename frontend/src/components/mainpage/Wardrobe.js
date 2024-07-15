import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Wardrobe.css';

const Wardrobe = ({ savedOutfits }) => {
    const [items, setItems] = useState([]);
    const [outfits, setOutfits] = useState([]);
    const [hiddenOutfits, setHiddenOutfits] = useState([]);
    const [bagStatus, setBagStatus] = useState({});
    const [wishlistStatus, setWishlistStatus] = useState({});
    const [notification, setNotification] = useState(null);

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
        console.log("Saved Outfits:", savedOutfits);
    }, [savedOutfits]);

    const hideOutfit = (id) => {
        setHiddenOutfits([...hiddenOutfits, id]);
    };

    const handleBagClick = (itemId) => {
        setBagStatus((prevStatus) => {
            const newStatus = prevStatus[itemId] === 'added' ? 'removed' : 'added';
            setNotification(newStatus === 'added' ? 'Added to Bag' : 'Removed from Bag');
            setTimeout(() => {
                setNotification(null);
            }, 3000);
            return { ...prevStatus, [itemId]: newStatus };
        });
    };

    const handleWishlistClick = (itemId) => {
        setWishlistStatus((prevStatus) => {
            const newStatus = prevStatus[itemId] === 'added' ? 'removed' : 'added';
            setNotification(newStatus === 'added' ? 'Added to Wishlist' : 'Removed from Wishlist');
            setTimeout(() => {
                setNotification(null);
            }, 3000);
            return { ...prevStatus, [itemId]: newStatus };
        });
    };

    return (
        <div className="wardrobe-container-t">
            <h1 className="wardrobe-title-t">YOUR VIRTUAL WARDROBE</h1>
            {outfits.filter(outfit => !hiddenOutfits.includes(outfit._id)).map((currentOutfit) => (
                <div className="outfit-card-t" key={currentOutfit._id}>
                    <button className="delete-outfit-btn-t" onClick={() => hideOutfit(currentOutfit._id)}>×</button>
                    <div className="items-row-t">
                        {currentOutfit.items.map((itemName, index) => {
                            const item = items.find(i => i.name === itemName);
                            return (
                                item && (
                                    <div className="item-card-t" key={index}>
                                        <img src={item.imageUrl} alt={item.name} className="item-image-t" />
                                        <div className="item-details-t">
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                            <p className="price-info-t">
                                                <span className="discounted-price-t">₹{item.discount_price}</span>
                                                <span className="original-price-t">₹{item.price}</span>
                                                <span className="discount-info-t">({item.discount})</span>
                                            </p>
                                            <p className="rating-info-t">Rating: {item.rating}</p>
                                            <p className="coupon-info-t">Coupon Code: {item.coupon_code}</p>
                                            <p className="best-price-info-t">Best Price: {item.best_price}</p>
                                            <div className="action-buttons-t">
                                                <button
                                                    className="add-to-bag-btn-t"
                                                    onClick={() => handleBagClick(item._id)}
                                                >
                                                    <FontAwesomeIcon icon={faShoppingBag} />
                                                    {bagStatus[item._id] === 'added' ? ' Added to Bag' : ' Add to Bag'}
                                                </button>
                                                <button
                                                    className="wishlist-btn-t"
                                                    onClick={() => handleWishlistClick(item._id)}
                                                >
                                                    <FontAwesomeIcon icon={faHeart} />
                                                    {wishlistStatus[item._id] === 'added' ? ' Remove from Wishlist' : ' Add to Wishlist'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            );
                        })}
                    </div>
                </div>
            ))}
            {notification && <div className="notification">{notification}</div>}
        </div>
    );
};

export default Wardrobe;
