import React from 'react';

// Sabhi components ko import karein
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Global styles ko import karein (agar aapne App.css rakha hai)
// import './App.css'; // Iski zaroorat nahi hai agar sab index.css mein hai

function App() {
  return (
    <div className="App">
      {/* Navbar sabse upar rahega */}
      <Navbar />
      
      {/* `main` tag ke andar sabhi page sections honge */}
      <main>
        {/* Hero Section (Introduction) */}
        <Hero />
        
        {/* About Me Section */}
        <About />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer sabse neeche rahega */}
      <Footer />
    </div>
  );
}

export default App;
