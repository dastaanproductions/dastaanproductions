import React, { useRef, useEffect, useState } from 'react';
//import { useTransition, animated } from '@react-spring/web';
import './Home.css'; // Import the CSS file



function Home() {
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  
  useEffect(() => {
    

    const handleHashChange = () => {
        
      if (window.location.hash === '#about') {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (window.location.hash === '#team') {
        teamRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (window.location.hash === '#services') {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (window.location.hash === '#contact') {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Scroll on initial render if hash is present

    return () => {
      
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  

  return (
    <div>
      

      <section ref={aboutRef} id="about">
        <h1>About Section</h1>
        <p>
          {`This is the About section. `.repeat(100)}
        </p>
      </section>

      <section ref={teamRef} id="team">
        <h1>Team Section</h1>
        <p>
          {`This is the Team section. `.repeat(100)}
        </p>
      </section>

      <section ref={servicesRef} id="services">
        <h1>Services Section</h1>
        <p>
          {`This is the Services section. `.repeat(100)}
        </p>
      </section>

      <section ref={contactRef} id="contact">
        <h1>Contact Section</h1>
        <p>
          {`This is the Contact section. `.repeat(100)}
        </p>
      </section>
    </div>
  );
}

export default Home;
