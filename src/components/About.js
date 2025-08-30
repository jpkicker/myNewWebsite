import React from 'react';
import jasonHeadshot from '../images/Jason-Ranney-Headshot-112025.jpg';

function About({ setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div id="about" className="page">
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Jason Ranney</h2>
              <h3 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Southeast Hard Surface Territory Manager</h3>
              <p>As your dedicated Southeast Hard Surface Territory Manager for Shaw Industries, I specialize in bringing you the finest flooring solutions across South Florida and Southeast Florida.</p>
              <p>With expertise in the complete Coretec Shaw Floors family - including Shaw Laminate, Shaw Vinyl, and Shaw Hardwood - I'm committed to helping you find the perfect flooring solution for your project needs.</p>
              <p>Whether you're a contractor, designer, retailer, or homeowner, I provide personalized service, technical expertise, and comprehensive product knowledge to ensure your flooring project exceeds expectations.</p>
              <a href="#" className="btn" onClick={() => handleNavClick('contact')}>Get in Touch</a>
            </div>
            <div className="about-image">
              <img 
                src={jasonHeadshot} 
                alt="Jason Ranney - Southeast Hard Surface Territory Manager" 
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 