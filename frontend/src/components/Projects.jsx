import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Example project data
const projects = [
  {
    title: 'StuddyConnect',
    description: 'StudyConnect is an online learning and collaboration platform that connects students, learners, and educators. Its main purpose is to make knowledge sharing and collaborative learning easy and interactive.',
    imageUrl: '/p1.jpg',
    liveLink: 'https://project-study-connect-frontend.onrender.com',
    codeLink: 'https://github.com/paras22072004/PROJECT-study-connect',
  },
  {
    title: 'Scrapido',
    description: '',
    imageUrl: '/p2.jpg',
    liveLink: 'https://scrapido-frontend.onrender.com',
    codeLink: 'https://github.com/paras22072004/Scrapido-/tree/main/demo',
  },
  {
    title: 'E-Commerce',
    description: '',
    imageUrl: '/p3.jpg',
    liveLink: 'https://e-commerce-frontend-fsrm.onrender.com',
    codeLink: 'https://github.com/paras22072004/E-commerce',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
