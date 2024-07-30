import React, { useRef, useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import './Home.css'; // Import the CSS file
import homeImage1 from './homeImage.png'; // Ensure the path is correct
import homeImage2 from './homeImage1.jpg'; // Ensure the path is correct
import About from './About';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';
import Services from './Services';
import Videography from './Videography';
import WhatsAppButton from './Whatsapp';

import './Header.css';
import ScrollUpButton from './ScrollUpButton';



const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const images = [homeImage1, homeImage2];
const texts = [
  { heading: 'Welcome to Dastaan Productions', paragraph: 'Bringing stories to life with passion and creativity.' },
  { heading: 'Our Vision', paragraph: 'Creating impactful and memorable content for the world to enjoy.' }
];

const BackgroundSlider = () => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {transitions((style, i) => (
        <animated.div
          key={i}
          className="bg-image"
          style={{ ...style, backgroundImage: `url(${images[i]})` }}
        >
          <animated.div style={style} className="text-content">
            <h1>{texts[i].heading}</h1>
            <p>{texts[i].paragraph}</p>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};

function Home() {
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const clientsRef = useRef(null);
  const servicesRef = useRef(null);
  const videoRef = useRef(null);

  const contactRef = useRef(null);
  
  
  
  
  useEffect(() => {
    

    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (window.location.hash === '#team') {
        teamRef.current.scrollIntoView({ behavior: 'smooth' });
      }else if (window.location.hash === '#clients') {
        clientsRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (window.location.hash === '#services') {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      }else if (window.location.hash === '#videography') {
        videoRef.current.scrollIntoView({ behavior: 'smooth' });
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
      

      <section id="home">
        
      <BackgroundSlider />
      </section>

      <section ref={aboutRef} id="about">
        <About />
      </section>

      
      <section ref={clientsRef} id="clients">
        <Clients />
      </section>

      <section ref={servicesRef} id="services">
        <Services />
        
        
      </section>
      <section ref={videoRef} id="videography">
        
        <Videography />
        
      </section>
      <section ref={teamRef} id="team">
        <Team />
      </section>

      <section ref={contactRef} id="contact">
        <Contact />
      </section>
      <WhatsAppButton />

      <ScrollUpButton />
    </div>
  );
}

export default Home;
