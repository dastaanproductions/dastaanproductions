import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './site/components/Nav';
import Footer from './site/components/Footer';
import WhatsAppFloat from './site/components/WhatsAppFloat';
import Home from './site/pages/Home';
import Work from './site/pages/Work';
import './site/styles/site.css';

// Scrolls to the top on a new page, or to a section when asked to.
function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    const target = location.state && location.state.scrollTo;
    if (target) {
      const timer = setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
