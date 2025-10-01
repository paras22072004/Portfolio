import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="contact-section" id="contact">
      <div ref={ref} className={`contact-container ${inView ? 'visible' : ''}`}>
        <h2 className="section-titleh1">Get in Touch</h2>
        <p className="contact-subtitle">
          Have a question or want to work together? Leave a message!
        </p>
        <form className="contact-form" action="https://formspree.io/f/your_unique_id" method="POST">
          {/* IMPORTANT: Replace 'your_unique_id' with your Formspree ID */}
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;