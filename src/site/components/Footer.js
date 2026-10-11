import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaBehance } from 'react-icons/fa';
import { contact } from '../data/siteInfo';

const icons = { instagram: FaInstagram, facebook: FaFacebook, behance: FaBehance };

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-static">
              <span className="brand-name big">Dastaan</span>
              <span className="brand-sub">PRODUCTIONS</span>
            </div>
            <p>Your story, edited with care.</p>
            <div className="socials">
              {contact.socials.map((s) => {
                const Icon = icons[s.key];
                return (
                  <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer-col">
            <span className="eyebrow">Explore</span>
            <Link to="/">Home</Link>
            <Link to="/work">Long-form work</Link>
          </div>
          <div className="footer-col">
            <span className="eyebrow">Contact</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phoneDisplay.replace(/[^+\d]/g, '')}`}>{contact.phoneDisplay}</a>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} Dastaan Productions. All rights reserved.</div>
      </div>
    </footer>
  );
}
