import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { scrollToId } from '../scroll';
import ScrollTimeline from './ScrollTimeline';

// Full-width bar with the scroll timeline along its bottom edge.
// Section links scroll on the homepage; from another page they go home first, then scroll.
export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const goTo = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === '/') {
      scrollToId(id);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const links = (
    <>
      <a href="#/" onClick={goTo('work')}>Work</a>
      <Link to="/work" className={location.pathname === '/work' ? 'active' : ''}>Long-form</Link>
      <a href="#/" onClick={goTo('services')}>Services</a>
      <a href="#/" onClick={goTo('team')}>Team</a>
      <a href="#/" onClick={goTo('contact')}>Contact</a>
    </>
  );

  return (
    <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav" aria-label="Main">
        <Link to="/" className="brand" aria-label="Dastaan Productions home">
          <span className="brand-name">Dastaan</span>
          <span className="brand-sub">Productions</span>
        </Link>
        <div className="nav-links">{links}</div>
        <a href="#/" className="btn btn-primary btn-sm nav-cta" onClick={goTo('contact')}>
          Start a project
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      <ScrollTimeline />
      {open && <div className="nav-sheet">{links}</div>}
    </header>
  );
}
