import React, { useState, useEffect } from 'react';
import './Form.css'; 

const Form = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500); // 1-second delay
  
      return () => clearTimeout(timer); // Cleanup timer
    }, []);
  
    return (
      <div className={`register-form-container ${isVisible ? 'visible' : ''}`}>
        <h2>Convert your ideas into workable solutions</h2>
        <p>Feel Free To Contact Us</p>
        <form>
          <input type="text" placeholder="Enter your Name*" />
          <input type="email" placeholder="Enter your Email*" />
          <button type="submit">Get Started Now</button>
        </form>
      </div>
    );
  };
  
  export default Form;