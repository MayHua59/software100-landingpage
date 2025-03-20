import React, { forwardRef } from 'react';
import './MainSection.css';
import { FaDollarSign, FaCode, FaMobileAlt, FaRocket, FaPencilAlt, FaSearch, FaObjectGroup, FaTools, FaGlobe, FaBolt } from 'react-icons/fa';

const MainSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="main-section" id="services">
      <div className="main-section-heading">
        <h2>We develop Web Application & Mobile Application</h2>
        <p>
          We Have Experienced in Web Application System such as Job Platform, E-commerce Platform, Company Portfolio Websites.
          In Mobile development, We developed E-commerce Apps, Job Apps, News media Apps etc..
        </p>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <FaBolt className="grid-icon" />
          <h3>Cost-effective Development</h3>
          <p>Our accessibility and strategic feedback ensure broadband communications, productivity and efficient delivery.</p>
        </div>
        <div className="grid-item">
          <FaCode className="grid-icon" />
          <h3>Technology Expertise</h3>
          <p>We use technical skills, high-quality coding practices and expertise in making architectural decisions related to app development.</p>
        </div>
        <div className="grid-item">
          <FaMobileAlt className="grid-icon" />
          <h3>Application Development</h3>
          <p>Development of mobile application/web started using latest tools and technologies with transparency.</p>
        </div>
        <div className="grid-item">
          <FaRocket className="grid-icon" />
          <h3>Full Cycle Product Development</h3>
          <p>Fully dedicated strategists, designers and engineers sitting shoulder-to-shoulder, working in concert from ideation and concept validation through deployment and optimization.</p>
        </div>
        <div className="grid-item">
          <FaTools className="grid-icon" />
          <h3>Design and Build Great Apps</h3>
          <p>Transform and Grow Your Business. Get Results Faster with High-Performing Teams. On Time. On Budget. Free Estimates. High Quality Results.</p>
        </div>
        <div className="grid-item">
          <FaGlobe className="grid-icon" />
          <h3>SEO Services</h3>
          <p>We also offer the SEO Optimization For Your Websites.</p>
        </div>
      </div>
    </div>
  );
});

export default MainSection;