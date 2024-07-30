import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Adjust the path if necessary
import './Header.css'; // Import the CSS file

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close the menu after clicking on a link (for small screens)
      setShowMenu(false);
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <Link className="navbar-brand" to="#">
            <img src={logo} alt="Daastan Productions" className="logo" />
          </Link>
        </div>
        <div className="navbar-center">
          {/* Hamburger menu icon */}
          <button className={`menu-toggle ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
  <span className="menu-icon"></span>
</button>

          {/* Navbar menu */}
          <div className={`navbar-menu ${showMenu ? 'active' : ''}`}>
            {/* <Link className="nav-link" to="/" onClick={() => scrollToSection('home')}>Home</Link> */}
            <Link className="nav-link" to="#" onClick={() => scrollToSection('about')}>About</Link>
            <Link className="nav-link" to="#" onClick={() => scrollToSection('team')}>Team</Link>
            <Link className="nav-link" to="#" onClick={() => scrollToSection('clients')}>Clients</Link>
            <Link className="nav-link" to="#" onClick={() => scrollToSection('services')}>Photography</Link>
            <Link className="nav-link" to="#" onClick={() => scrollToSection('videography')}>Videos</Link>
            <Link className="nav-link" to="#" onClick={() => scrollToSection('contact')}>Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
