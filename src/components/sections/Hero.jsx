import React from 'react';
import './Hero.css';
import ImageWithFallback from '../common/ImageWithFallback';

const Hero = () => {
  const stats = [
    { number: "7+", label: "Years Experience" },
    { number: "2", label: "Locations" },
    { number: "10k+", label: "Cars Serviced" },
    { number: "260+", label: "Modifications Done" }
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <ImageWithFallback src={'/src/assets/images/hero.jpg'} alt="hero" style={{width: '100%', height: '100%'}} />
      </div>
      <div className="container">
        <div className="hero-content">
          <h1>REDLINE PERFOMANCE GARAGE</h1>
          <p>We provide expert automotive services including painting, Modifications, pre-purchase inspections, Tuning, and consultation to keep your vehicle in peak condition.</p>
          <div className="hero-cta">
            <a href="#services" className="btn">Book Service</a>
          </div>
          <div className="stats-frame">
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div className="stat-item" key={idx}>
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;