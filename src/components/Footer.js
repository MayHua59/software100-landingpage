import React from 'react';
import './Footer.css';
import logoImg from  '../images/melosoft-icon.png'

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
        <img src={logoImg} alt="Logo Image" className="logo-img" />
      <p>&copy; {currentYear} Software 100. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;