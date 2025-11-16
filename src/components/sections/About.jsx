import React from 'react';
import './About.css';
import ImageWithFallback from '../common/ImageWithFallback';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>RedLine is dedicated to delivering premium automotive care and performance upgrades. Our team of experienced technicians handles painting, modifications, inspections, tuning and consultation services with a focus on quality and customer satisfaction.</p>
        </div>
          <div className="about-image">
            <ImageWithFallback src={'/src/assets/images/about.jpg'} alt="about" />
          </div>
      </div>
    </section>
  );
};

export default About;
