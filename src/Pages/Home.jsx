import React, { useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import '../css/home.css';

function Home() {
  // Lock body scroll while this page is mounted
  useEffect(() => {
    document.body.classList.add('lock-scroll');      // disable page scroll only on this route
    return () => document.body.classList.remove('lock-scroll'); // restore on unmount/route change
  }, []);

  return (
    <div className="page hero">
      <div className="margin-fixer">
        {/* Subtle animated background */}
        <div className="bg-animation">
          <div className="blob blue-1 b1"></div>
          <div className="blob blue-2 b2"></div>
          <div className="blob gray b3"></div>
        </div>

        <div className="container hero-grid">
          {/* Left: Text Content */}
          <div className="hero-copy">
            <h1 className="hero-title">
              Hi, I'm <span className="muted">Nithees SJ</span>
            </h1>
            <p className="subtitle">Student at Kongu Engineering College, Perundurai</p>
            <p className="subtitle">AIML-UG</p>

            {/* Buttons Section */}
            <div className="actions">
              <a href="https://www.linkedin.com/in/nithees-s-j-524262366/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <span>LinkedIn</span>
                <div className="btn-glow"></div>
              </a>
              <a href="https://github.com/nithees-sj" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <span>GitHub</span>
                <div className="btn-glow"></div>
              </a>
              <a href="https://leetcode.com/u/nithees-sj/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <span>LeetCode</span>
                <div className="btn-glow"></div>
              </a>
              <a href="https://www.kaggle.com/nitheessj" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <span>Kaggle</span>
                <div className="btn-glow"></div>
              </a>
            </div>

            {/* Tech badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className="badge-row" style={{ flexWrap: 'wrap', gap: '24px', marginTop: '30px' }}>
                {['🌐 HTML', '🎨 CSS', '🟨 JS', '🌬️ Tailwind'].map((tech, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span className="badge tech-badge">
                      <span className="badge-icon">{tech.split(' ')[0]}</span> {tech.split(' ')[1]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="badge-row" style={{ flexWrap: 'wrap', gap: '24px' }}>
                {['⚛️ React', '🟢 Node', '🍃 MongoDB', '🐧 Linux'].map((tech, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-20px' }}>
                    <span className="badge tech-badge">
                      <span className="badge-icon">{tech.split(' ')[0]}</span> {tech.split(' ')[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="quick-facts" style={{ marginTop: '32px' }}>
              {['🎯 Problem Solver', '🚀 Fast Learner', '💡 Creative Thinker'].map((fact, i) => (
                <div key={i} className="fact-item">
                  <span className="fact-icon">{fact.split(' ')[0]}</span> {fact.split(' ').slice(1).join(' ')}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="hero-visual">
            <div className="portrait">
              <img src={profileImg} alt="Nithees SJ" className="portrait-img" />
            </div>
            <div className="float-card fc-top">
              <span className="card-icon">✨</span>Data Analyst
            </div>
            <div className="float-card fc-bottom">
              <span className="card-icon">🔧</span>Problem Solver
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="hero-bottom">
        <div className="container">
          <div className="bottom-grid">
            <div className="bottom-card">
              <h3>What I Do</h3>
              <p>Building full-stack applications with modern technologies, focusing on user experience and clean code.</p>
            </div>
            <div className="bottom-card">
              <h3>My Passion</h3>
              <p>Creating solutions that make a difference, whether it's career guidance or solving complex problems.</p>
            </div>
            <div className="bottom-card">
              <h3>Current Focus</h3>
              <p>Exploring the latest web technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
