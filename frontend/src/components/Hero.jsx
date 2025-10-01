import React, { useState } from 'react';
import './Hero.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [showEmail, setShowEmail] = useState(false);

  const handleEmailClick = () => {
    setShowEmail(true);
  };

  const closePopup = () => {
    setShowEmail(false);
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Paras Kumar</span>
        </h1>
        <p className="hero-subtitle">A Passionate Full-Stack Developer</p>
        <p className="hero-description">
          I build modern, responsive, and interactive web applications.
        </p>

        <a href="#projects" className="hero-button">
          View My Work
        </a>

        {/* Social Links */}
        <div className="hero-social">
          <a
            href="https://www.linkedin.com/in/paraskumar22/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>

          {/* Gmail icon triggers popup */}
          <button
            onClick={handleEmailClick}
            className="social-icon email-button"
          >
            <FaEnvelope />
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showEmail && (
        <div className="email-popup">
          <div className="email-popup-content">
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <h3>My Email</h3>
            <p>parasbiltoria22@gmail.com</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
