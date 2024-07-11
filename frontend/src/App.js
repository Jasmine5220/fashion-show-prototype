import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css'; // Create this CSS file for global styles

function App() {
    const [videoUrl, setVideoUrl] = useState('');

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
            <MainContent videoUrl={videoUrl} />
            <Footer />
        </div>
    );
}

export default App;
