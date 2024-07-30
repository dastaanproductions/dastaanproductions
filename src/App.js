import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
//import NavBar from './NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Team from './Components/Team';
import Clients from './Components/Clients';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
