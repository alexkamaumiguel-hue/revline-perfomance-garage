import React from 'react';
import './Stats.css';

const Stats = () => {
  const stats = [
    {
      number: "7+",
      label: "Years Experience"
    },
    {
      number: "2",
      label: "Locations"
    },
    {
      number: "10k+",
      label: "Cars Serviced"
    },
    {
      number: "260+",
      label: "Modifications Done"
    }
  ];

  return (
    <section className="section stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;