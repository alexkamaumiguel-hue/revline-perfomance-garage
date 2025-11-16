import React from 'react';
import './features.css';
import ImageWithFallback from '../common/ImageWithFallback';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-content">
          <h2>Key Features</h2>
          <p>Description for our key features, highlighting benefits and capabilities of our services.</p>
        </div>
          <div className="features-image">
              <ImageWithFallback src={'/src/assets/images/features.jpg'} alt="features" />
          </div>
      </div>
    </section>
  );
};

export default Features;
