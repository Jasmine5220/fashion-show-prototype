// src/App.js
import React, { useState } from 'react';
import Header from './components/mainpage/Header';
import MainContent from './components/mainpage/MainContent';
import Footer from './components/mainpage/Footer';
import Landing from './components/mainpage/Landing';
import './App.css';
import Wardrobe from './components/mainpage/Wardrobe';
import { IntervalProvider } from './components/mainpage/IntervalContext';

function App() {
    const [showMainContent, setShowMainContent] = useState(false);
    const [showWardrobe, setShowWardrobe] = useState(false);
    const [savedOutfits, setSavedOutfits] = useState(new Set());

    const handleWardrobeClick = () => {
        setShowMainContent(false);
        setShowWardrobe(true);
    };

    return (
        <IntervalProvider>
            <div className="app">
                <Header />
                {showMainContent ? (
                    <MainContent setSavedOutfits={setSavedOutfits} />
                ) : showWardrobe ? (
                    <Wardrobe savedOutfits={savedOutfits} />
                ) : (
                    <Landing onImageClick={() => setShowMainContent(true)} />
                )}
                {showMainContent && (
                    <div className="cta-buttons">
                        <button onClick={handleWardrobeClick} savedOutfits={savedOutfits}>Your Virtual Wardrobe &#8594;</button>
                    </div>
                )}
                <Footer />
            </div>
        </IntervalProvider>
    );
}

export default App;
