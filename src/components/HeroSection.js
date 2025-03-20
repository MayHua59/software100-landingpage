import React, { useState, forwardRef } from 'react';
import './HeroSection.css';
import heroImg from '../images/hero-section-removebg.png';
import Form from './Form';

const HeroSection = forwardRef((props, ref) => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div ref={ref} className='hero-section-container' id="home">
      <div className='left-img'>
        <img src={heroImg} alt="company logo" className=''/>
      </div>
      <div className='right-form'>
        <Form/>
      </div>
    </div>
  );
});

export default HeroSection;