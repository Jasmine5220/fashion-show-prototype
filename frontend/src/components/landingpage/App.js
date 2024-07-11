import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Enter Virtual Fashion Show</h1>
            <p>Grab the best deals</p>
          </div>
          <img src="https://via.placeholder.com/1500x500" alt="Fashion Show" />
        </section>
        <section className="about">
          <h2>About the Event</h2>
          <p>Brief description of the event, its history, and its significance in the fashion industry.</p>
        </section>
        <section className="designers">
          <h2>Featured Designers</h2>
          <div className="designer-grid">
            <div className="designer-card">
              <img src="https://via.placeholder.com/150" alt="Designer" />
              <h3>Designer Name</h3>
              <p>Short bio of the designer.</p>
            </div>
            {/* Add more designer cards as needed */}
          </div>
        </section>
        <section className="schedule">
          <h2>Event Schedule</h2>
          <ul>
            <li><strong>Day 1:</strong> Opening Ceremony</li>
            <li><strong>Day 2:</strong> Designer Showcases</li>
            <li><strong>Day 3:</strong> Awards and Closing</li>
          </ul>
        </section>
        <section className="live-stream">
          <h2>Live Streaming</h2>
          <p>Countdown or embed live stream here.</p>
        </section>
        <section className="gallery">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            <img src="https://via.placeholder.com/300" alt="Gallery" />
            {/* Add more gallery images as needed */}
          </div>
        </section>
        <section className="sponsors">
          <h2>Sponsors</h2>
          <div className="sponsor-logos">
            <img src="https://via.placeholder.com/100" alt="Sponsor" />
            {/* Add more sponsor logos as needed */}
          </div>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial-carousel">
            <blockquote>
              <p>"Amazing event! Can't wait for next year."</p>
              <cite>- Attendee Name</cite>
            </blockquote>
            {/* Add more testimonials as needed */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
