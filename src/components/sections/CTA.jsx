import React from 'react';
import './CTA.css';
import ImageWithFallback from '../common/ImageWithFallback';

const CTA = () => {
  return (
    <section className="section cta">
      <div className="container cta-grid">
        <div className="cta-text">
          <h2 className="section-title">Ready to upgrade your ride?</h2>
          <p className="section-subtitle">Book a consultation or bring your car in for a premium service today.</p>
          <a className="btn" href="#services">Get Started</a>
        </div>
        <div className="cta-media">
          <ImageWithFallback src={'/src/assets/images/cta.jpg'} alt="cta" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
