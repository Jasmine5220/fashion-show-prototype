// src/components/MainContent.js
import React from 'react';
import OutfitDetails from './OutfitDetails';
import FashionShow from './FashionShow';
import './MainContent.css'; // Create this CSS file for styling

function MainContent({ outfitItems, videoUrl }) {
    return (
        <main className="main-content">
            <OutfitDetails items={outfitItems} />
            <FashionShow videoUrl={videoUrl} />
        </main>
    );
}

export default MainContent;