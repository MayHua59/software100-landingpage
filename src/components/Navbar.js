
import React, { useState } from 'react';
import  { useRef } from 'react';
import logoImage from "../images/melosoft-icon.png";
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const whyUsRef = useRef(null);
  const companyRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='nav'>
    <div className='logo-container '>
    <img src={logoImage} alt="company logo" className=''/>
    </div>
    <div className='list-container'>
        <ul className=''>
            <li onClick={() => scrollToSection(homeRef)}>Home</li>
            <li onClick={() => scrollToSection(servicesRef)}>Services</li>
            <li onClick={() => scrollToSection(whyUsRef)}>Why us?</li>
            <li onClick={() => scrollToSection(companyRef)}>Company</li>
        </ul>
    </div>
</nav>
  );
}

export default Navbar;