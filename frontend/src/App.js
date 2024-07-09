// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css'; // Create this CSS file for global styles

function App() {
    const [outfitItems, setOutfitItems] = useState([]);
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        fetch('/api/outfit-items')
            .then(response => response.json())
            .then(data => setOutfitItems(data))
            .catch(error => console.error('Error fetching outfit items:', error));

        fetch('/api/fashion-show-video')
            .then(response => response.json())
            .then(data => setVideoUrl(data.url))
            .catch(error => console.error('Error fetching fashion show video:', error));
    }, []);

    return (
        <div className="app">
            <Header />
            <MainContent outfitItems={outfitItems} videoUrl={videoUrl} />
            <Footer />
        </div>
    );
}

export default App;
