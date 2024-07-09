// src/components/OutfitDetails.js
import React from 'react';
import OutfitItem from './OutfitItem';
import './OutfitDetails.css';

function OutfitDetails({ items }) {
    return (
        <section className="outfit-details">
            <h2 className='title-here'>In This Outfit</h2>
            <div className="items-grid">
                {items.map(item => (
                    <OutfitItem
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        discount={item.discount}
                    />
                ))}
            </div>
            <div className="see-more">
                <div className="text">See more</div>
                <button className='button-see-more'></button>
            </div>
        </section>
    );
}

export default OutfitDetails;
