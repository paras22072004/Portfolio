import React from 'react';
import './Hero.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
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
          <a
            href="mailto:your-email@gmail.com"
            className="social-icon"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Optional 3D / Animated Background */}
      <div className="hero-background">
        {/* Yahan particles ya 3D model add kar sakte ho */}
      </div>
    </section>
  );
};

export default Hero;
