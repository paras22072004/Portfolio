import React from 'react';
import './Navbar.css';

// `setActiveSection` ko props se lein
const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Ispe click karke Home (Hero section) par jaayein */}
        <a href="#home" onClick={() => setActiveSection('home')}>MyPortfolio</a>
      </div>
      <ul className="navbar-links">
        {/* Sabhi links ab onClick event ka use karenge */}
        <li><a href="#about" onClick={() => setActiveSection('about')}>About</a></li>
        <li><a href="#projects" onClick={() => setActiveSection('projects')}>Projects</a></li>
        <li><a href="#skills" onClick={() => setActiveSection('skills')}>Skills</a></li>
        <li><a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
