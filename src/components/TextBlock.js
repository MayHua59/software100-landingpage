import React, { forwardRef, useRef, useEffect, useState } from 'react';
import './TextBlock.css';
import serviceImg from '../images/service-bg-remove.png';

const AnotherSection = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={(node) => {
        sectionRef.current = node;
        if (ref) {
          ref.current = node;
        }
      }}
      className={`another-section ${isVisible ? 'animated' : ''}`}
      id="whyUs"
    >
      <div className="text-column">
        <h2>We work towards your business goals</h2>
        <ul>
          <li>
            Every app starts with an idea. The first step is to deeply analyze the idea and strategize how to get the idea ticking for the best
          </li>
          <li>
            High-quality applications that meet particular business and technical requirements
          </li>
          <li>
            We take responsibility and after care about the Apps we developed.
          </li>
        </ul>
      </div>
      <div className="image-column">
        <img src={serviceImg} alt="Special Image" className="shaking-image" />
      </div>
    </div>
  );
});

export default AnotherSection;