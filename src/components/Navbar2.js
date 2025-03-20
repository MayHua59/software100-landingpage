import React, { useState } from 'react';
import './Navbar2.css'; // Create this CSS file
import logoImg from '../images/melosoft-icon.png'

const Navbar2 = ({ onNavClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={logoImg} alt="company logo" />
      </div>
      <div className={`list-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul>
          <li onClick={() => onNavClick('home')}>Home</li>
          <li onClick={() => onNavClick('services')}>Services</li>
          <li onClick={() => onNavClick('whyUs')}>Why us?</li>
          <li onClick={() => onNavClick('company')}>Company</li>
        </ul>
      </div>
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar2;