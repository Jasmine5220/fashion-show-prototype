import React from 'react';
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

  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero">
          <h1>Experience the Future of Fashion</h1>
          <p>Join us for an unforgettable journey of style and innovation</p>
          <div className="cta-buttons">
            <button>Register Now</button>
            <button>Watch Live</button>
            <button>Learn More</button>
          </div>
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

