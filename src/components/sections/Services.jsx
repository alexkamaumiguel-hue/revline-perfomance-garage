import React from 'react';
import './Services.css';
import ImageWithFallback from '../common/ImageWithFallback';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-image">
          <ImageWithFallback src={'/src/assets/images/services.jpg'} alt="services" />
        </div>
        <div className="services-content">
          <h2>Our Services</h2>
          <p>We provide comprehensive automotive services including professional painting, expert modifications, pre-purchase inspections, advanced tuning, and expert consultation to keep your vehicle in peak condition.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
