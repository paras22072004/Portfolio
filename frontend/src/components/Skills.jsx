import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

// Aap yahan apne skills aur unke icons (optional) add kar sakte hain
const skillsData = [
  'HTML', 'CSS', 'JavaScript (ES6+)', 'React',
  'Node.js', 'Express', 'MongoDB','MySQL', 'Git & GitHub', 'Tailwind CSS', 'C','C++','Java'
   
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation sirf ek baar chalega
    threshold: 0.2,    // Section ka 20% dikhne par animation shuru hoga
  });

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-titleh">My Technical Skills</h2>
      <div ref={ref} className="skills-grid">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            // `inView` true hone par 'visible' class add hogi
            className={`skill-item ${inView ? 'visible' : ''}`}
            // Har item ke animation mein thoda sa delay add karein
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
