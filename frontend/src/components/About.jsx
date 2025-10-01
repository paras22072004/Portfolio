import React from 'react';
import './About.css';

// If you want to import an image instead of using public folder:
// import profilePic from '../assets/photo.jpg';

const About = () => {
    return (
        <section className="about-section" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-container">
                <div className="about-image-container">
                    <img
                        src="/pic.jpg" // Correct path if image is in public folder
                        alt="Paras Kumar"
                        className="about-image"
                    />
                </div>
                <div className="about-content">
                    <h3>Hello! I'm <span className="highlight">Paras Kumar</span></h3>
                    <p>
                        I am a dedicated Computer Science student pursuing my B.Tech at VIPS, GGSIPU. 
                        I love exploring how real-world technology works and keep strengthening my core programming skills.
                    </p>
                    <p>
                        I aim to grow as a Software Engineer who solves real problems through clean, efficient code and practical solutions that make everyday life easier.
                    </p>
                    <p>
                        I enjoy collaborating in teams, exchanging ideas, and learning from people around me. 
                        I believe technology has the power to make a real difference, and I want to be a part of that change.
                    </p>
                    <p>
                        I am a full-stack web developer with experience in both front-end and back-end technologies, including React, JavaScript (ES6+), HTML5, CSS3, Node.js, and databases. I also have strong coding skills in C, C++, and Java, along with a solid understanding of data structures and algorithms (DSA). I enjoy turning complex problems into simple, elegant solutions and continuously learning new technologies to stay updated in the ever-evolving world of web development.
                    </p>
                    <a href="/resume.pdf" className="resume-button" download>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
