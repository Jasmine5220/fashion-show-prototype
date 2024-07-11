import React from 'react';
import OutfitDetails from './OutfitDetails';
import FashionShow from './FashionShow';
import SideBar from './Sidebar';
import './MainContent.css';

function MainContent({ outfitItems, videoUrl }) {
    return (
        <main className="main-content">
            <div className="left-side">
                <OutfitDetails items={outfitItems} />
            </div>
            <div className="right-side">
                <FashionShow videoUrl={videoUrl} />
                <SideBar />
            </div>
        </main>
    );
}

export default MainContent;
