import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import aboutImage from './aboutImage.jpg'; 
import { FaCamera, FaVideo, FaEdit } from 'react-icons/fa';

function About() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }, { threshold: 0.1 });

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
    <div id="about" className="about-container" ref={sectionRef}>
      <div className="about-image" style={{ backgroundImage: `url(${aboutImage})` }}>
        <div className="about-overlay">
          <section className={`wrapper ${animate ? 'animate-heading' : ''}`}>
            <div className="top">About Us</div>
            <div className="bottom" aria-hidden="true">About Us</div>
          </section>
          <div className="about-content">
            <div className="about-text">
              <h2 className={animate ? 'animate-heading' : ''}>Our Expertise</h2>
              <div className={`point ${animate ? 'animate-subheading' : ''}`}>
                <h3><FaCamera className="icon" /> Photography</h3>
                {/* <p>We capture moments with precision and creativity.</p> */}
              </div>
              <div className={`point ${animate ? 'animate-subheading' : ''}`}>
                <h3><FaVideo className="icon" /> Videography</h3>
                {/* <p>We create captivating visuals.</p> */}
              </div>
              <div className={`point ${animate ? 'animate-subheading' : ''}`}>
                <h3><FaEdit className="icon" /> Editing</h3>
                {/* <p>We transform footage into polished productions.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
