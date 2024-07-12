import React, { useState, useEffect } from 'react';
import Header from './components/mainpage/Header';
import MainContent from './components/mainpage/MainContent';
import Footer from './components/mainpage/Footer';
import Landing from './components/mainpage/Landing';
import './App.css'; // Ensure you create this CSS file

function App() {
    const [videoUrl, setVideoUrl] = useState('');
    const [showMainContent, setShowMainContent] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/api/fashion-show-video')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setVideoUrl(data.url))
            .catch(error => console.error('Error fetching fashion show video:', error));
    }, []);

    return (
        <div className="app">
            <Header />
            {showMainContent ? (
                <MainContent videoUrl={videoUrl} />
            ) : (
                <Landing onImageClick={() => setShowMainContent(true)} />
            )}
            <Footer />
        </div>
    );
}

export default App;
