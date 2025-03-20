import React from 'react';
import { useRef } from 'react';
import HeroSection from './HeroSection';
import MainSection from './MainSection';
import TextBlock from './TextBlock';
import Contact from './Contact';
import Footer from './Footer';
import Navbar2 from './Navbar2';
import ScrollToTopButton from './ScrollToTopBtn';

import Navbar from './Navbar';
function Home() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const whyUsRef = useRef(null);
  const companyRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    services: servicesRef,
    whyUs: whyUsRef,
    company: companyRef,
  };
  const handleNavClick = (sectionId) => {
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
      <div className=''>
       
        <header>
            {/* <Navbar /> */}
            <Navbar2 onNavClick={handleNavClick}/>
            <HeroSection ref={homeRef}/>
        </header>
        {/* Start Main Section */}
        <main>
          <MainSection ref={servicesRef}/>
          
        </main>

        {/* End Main Section */}
        {/* Text Block */}
        <TextBlock ref={whyUsRef} />
        {/* End Text Block */}
        {/* Contact Section */}
        <Contact ref={companyRef}/>
        {/*  End Contact Section */}
        <Footer/>
        <div>
      {/* Your page content */}
      <ScrollToTopButton />
    </div>
      </div>
    );
  }
  export default Home;