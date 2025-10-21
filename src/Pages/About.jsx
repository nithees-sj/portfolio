import React from 'react';
import '../css/about.css';

function About() {
  return (
    <div class="about-page rings">
    <div className="page about-page">
      <div class="about-blob blue b1"></div>
      <div class="about-blob cyan b2"></div>
      <div class="about-blob gray b3"></div>

      <div className="container">
        <h1 className="page-title">About Me</h1>
        
        <div className="about-hero">
          <div className="about-intro fullwidth">
            <div className="intro-content">
              <p className="intro-text">
                I'm a passionate student pursuing Artificial Intelligence and Machine Learning 
                at Kongu Engineering College, Perundurai. I love building full-stack applications 
                and solving complex problems through technology.
              </p>
              <p className="intro-text">
                My journey in technology started with web development, and I've since expanded 
                into machine learning, data analysis, and software engineering. I believe in 
                continuous learning and staying updated with the latest technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '32px', textAlign: 'center' }}>
            My Skills & Technologies
          </h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Front End:</h3>
              <div className="skill-pills">
                <span className="skill-pill pill-blue">HTML</span>
                <span className="skill-pill pill-orange">CSS</span>
                <span className="skill-pill pill-yellow">JavaScript</span>
                <span className="skill-pill pill-cyan">Tailwind CSS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Frameworks & Libraries:</h3>
              <div className="skill-pills">
                <span className="skill-pill pill-blue">React</span>
                <span className="skill-pill pill-green">Node.js</span>
                <span className="skill-pill pill-purple">Express.js</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Back End & Database:</h3>
              <div className="skill-pills">
                <span className="skill-pill pill-green">MongoDB</span>
                <span className="skill-pill pill-red">MySQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Programming Languages:</h3>
              <div className="skill-pills">
                <span className="skill-pill pill-blue">Python</span>
                <span className="skill-pill pill-green">Java</span>
                <span className="skill-pill pill-red">C</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Tools:</h3>
              <div className="skill-pills">
                <span className="skill-pill pill-cyan">Git</span>
                <span className="skill-pill pill-orange">Figma</span>
                <span className="skill-pill pill-purple">PowerBI</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Operating Systems:</h3>
              <div className="skill-pills">
                <span className="skill-pill pill-yellow">Linux</span>
              </div>
            </div>

          </div>
        </div>

        {/* Education & Experience Section */}
        <div className="education-section">
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '32px', textAlign: 'center' }}>
            Education & Journey
          </h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Bachelor of Technology - AIML</h3>
                <p>Kongu Engineering College, Perundurai</p>
                <p>Currently pursuing Artificial Intelligence and Machine Learning, focusing on cutting-edge technologies and practical applications.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Web Development Journey</h3>
                <p>Self-Taught & Online Learning</p>
                <p>Started learning web development through online platforms, building projects and continuously improving my skills in modern web technologies.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Problem Solving & Coding</h3>
                <p>Competitive Programming & LeetCode</p>
                <p>Regularly solving coding challenges and participating in competitive programming to enhance problem-solving skills and algorithmic thinking.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interests & Hobbies Section */}
        <div className="interests-section">
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '32px', textAlign: 'center' }}>
            What I Love Doing
          </h2>
          
          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">💻</div>
              <h3>Coding</h3>
              <p>Building applications and solving problems through code.</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">🤖</div>
              <h3>AI/ML Research</h3>
              <p>Exploring artificial intelligence and machine learning algorithms.</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">📊</div>
              <h3>Data Analysis</h3>
              <p>Extracting insights from data to drive innovation.</p>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="goals-section">
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '32px', textAlign: 'center' }}>
            My Goals & Aspirations
          </h2>
          
          <div className="goals-content">
            <div className="goal-item">
              <div className="goal-icon">🚀</div>
              <div className="goal-text">
                <h3>Full-Stack Developer</h3>
                <p>Master frontend and backend technologies to build complete applications.</p>
              </div>
            </div>
            <div className="goal-item">
              <div className="goal-icon">🧠</div>
              <div className="goal-text">
                <h3>AI/ML Specialist</h3>
                <p>Develop expertise in artificial intelligence and machine learning.</p>
              </div>
            </div>
            <div className="goal-item">
              <div className="goal-icon">🌍</div>
              <div className="goal-text">
                <h3>Global Impact</h3>
                <p>Use technology to solve real-world problems and make a positive difference.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
