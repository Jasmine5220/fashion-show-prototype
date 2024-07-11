// src/components/OutfitDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";

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
        <div>
            <h1>Outfit Details</h1>

            <h2>Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        {item.name} - {item.description}
                    </li>
                ))}
            </ul>

            <h2>Outfits</h2>
            <ul>
                {outfits.map(outfit => (
                    <li key={outfit._id}>
                        Outfit ID: {outfit.outfitid} - Likes: {outfit.likes}
                        <ul>
                            {outfit.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OutfitDetails;
