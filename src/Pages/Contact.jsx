import React from 'react';
import '../css/contact.css';

function Contact() {
  return (
    <div className="page contact-page">
      <div className="container">
        <h1 className="page-title">Get In Touch</h1>
        
        {/* Main Contact Section */}
        <div className="contact-hero-section">
          <div className="contact-intro">
            <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#111827', marginBottom: '20px', textAlign: 'center' }}>
              Let's Build Something Amazing Together
            </h2>
            <p style={{ color: '#6b7280', lineHeight: '1.7', marginBottom: '40px', textAlign: 'center', fontSize: '18px', maxWidth: '800px', margin: '0 auto 40px auto' }}>
              I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in technology. 
              Whether you have a project idea, want to discuss AI/ML, or just want to say hello, I'd love to hear from you!
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="contact-methods-grid">
            <a href="mailto:nitheessj@gmail.com" className="contact-card contact-link">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>nitheessj@gmail.com</p>
              <span className="contact-description">Best for detailed discussions and project inquiries</span>
            </a>
            
            <a href="https://www.linkedin.com/in/nithees-s-j-524262366/" target="_blank" rel="noopener noreferrer" className="contact-card contact-link">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>nithees-sj</p>
              <span className="contact-description">Connect with me and my updates</span>
            </a>
            
            <a href="https://github.com/nithees-sj" target="_blank" rel="noopener noreferrer" className="contact-card contact-link">
              <div className="contact-icon">💻</div>
              <h3>GitHub</h3>
              <p>nithees-sj</p>
              <span className="contact-description">Check out my projects and contributions</span>
            </a>
          </div>
        </div>

        {/* About Me Section */}
        <div className="about-contact-section">
          <div className="about-contact-content">
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '24px', textAlign: 'center' }}>
              A Bit About Me
            </h2>
            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon">🎓</div>
                <h3>Student & Learner</h3>
                <p>Currently pursuing AIML at Kongu Engineering College, always eager to learn new technologies and expand my knowledge.</p>
              </div>
              <div className="about-card">
                <div className="about-icon">🚀</div>
                <h3>Full-Stack Developer</h3>
                <p>Passionate about building end-to-end applications using modern web technologies and frameworks.</p>
              </div>
              <div className="about-card">
                <div className="about-icon">🤖</div>
                <h3>AI/ML Enthusiast</h3>
                <p>Fascinated by artificial intelligence and machine learning, constantly exploring new algorithms and applications.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interests & Skills */}
        <div className="interests-section">
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '24px', textAlign: 'center' }}>
            What I'm Working On
          </h2>
          <div className="interests-grid">
            <div className="interest-item">
              <span className="interest-tag">Web Development</span>
            </div>
            <div className="interest-item">
              <span className="interest-tag">Machine Learning</span>
            </div>
            <div className="interest-item">
              <span className="interest-tag">Data Analysis</span>
            </div>
            <div className="interest-item">
              <span className="interest-tag">React Projects</span>
            </div>
            <div className="interest-item">
              <span className="interest-tag">Node.js</span>
            </div>
            <div className="interest-item">
              <span className="interest-tag">MongoDB</span>
            </div>
            <div className="interest-item">
              <span className="interest-tag">Python</span>
            </div>
            <div className="interest-item">
              <span className="interest-tag">Linux</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta">
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111827', marginBottom: '16px', textAlign: 'center' }}>
            Ready to Collaborate?
          </h2>
          <p style={{ color: '#6b7280', fontSize: '18px', textAlign: 'center', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="cta-buttons">
            <a href="https://www.linkedin.com/in/nithees-s-j-524262366/" target="_blank" rel="noopener noreferrer" className="cta-btn">
              Connect on LinkedIn
            </a>
            <a href="https://github.com/nithees-sj" target="_blank" rel="noopener noreferrer" className="cta-btn">
              View My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
