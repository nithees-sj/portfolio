import React from 'react';
import '../css/projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Career Development Chatbot",
      description: "A platform for users of all ages to ask career-related questions and receive instant guidance.",
      features: [
        "AI-powered career guidance",
        "Multi-age group support", 
        "Instant question answering",
        "Personalized recommendations"
      ],
      tech: ["React", "Node.js", "MongoDB", "AI/ML"],
      status: "Completed",
      category: "AI/Career Guidance",
      codeUrl: "https://github.com/nithees-sj/attendance-management"
    },
    {
      id: 2,
      title: "Personalized Career Developer and Doubt Solver",
      description: "Allows users to personalize an AI chatbot for precise answers and post doubts to be clarified by AI.",
      features: [
        "Personalized AI chatbot",
        "Doubt posting system",
        "AI-powered clarifications",
        "User customization"
      ],
      tech: ["React", "Node.js", "MongoDB", "OpenAI API"],
      status: "Completed", 
      category: "AI/Personalization",
      codeUrl: "https://github.com/nithees-sj/career-bot"
    },
    {
      id: 3,
      title: "Career Developer + Doubt Solver Pro",
      description: "Combines both career and learning features with comprehensive tools for students and professionals.",
      features: [
        "Resume builder",
        "Roadmap designer", 
        "Project ideas generator",
        "Skill guidance for specific roles",
        "Doubt solver with multi-format support",
        "Summarizer and quiz generator",
        "Video upload and quiz generation for teachers"
      ],
      tech: ["React", "Node.js", "MongoDB", "AI/ML", "PDF Processing", "Video Processing"],
      status: "Completed",
      category: "Full-Stack Platform",
      codeUrl: "https://github.com/nithees-sj/novard-ai/"
    }
  ];

  const projectStats = [
    { label: "Projects Completed", value: "3", icon: "✅" },
    { label: "Technologies Used", value: "10+", icon: "⚡" },
    { label: "AI Integration", value: "100%", icon: "🤖" },
    { label: "User Focused", value: "100%", icon: "👥" }
  ];

  return (
    <div className="page projects-page">
      <div className="container">
        {/* Hero section */}
        <div className="projects-hero">
          <h1 className="section-title">My Projects</h1>
          <p className="projects-subtitle">
            Building innovative solutions that bridge the gap between technology and career development
          </p>
          
          <div className="project-stats">
            {projectStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects showcase */}
        <div className="projects-showcase">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="project-content">
                <div className="project-header">
                  <div className="project-category">{project.category}</div>
                  <div className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </div>
                </div>
                
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-actions">
                  <button className="btn btn-primary">View Details</button>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    View Code
                  </a>
                </div>
              </div>
              
              <div className="project-visual">
                <div className="project-mockup">
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-line"></div>
                    <div className="mockup-line short"></div>
                    <div className="mockup-line medium"></div>
                    <div className="mockup-buttons">
                      <div className="mockup-btn"></div>
                      <div className="mockup-btn"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project highlights */}
        <div className="project-highlights">
          <h2 className="section-subtitle">Project Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h3>Problem Solving</h3>
              <p>Each project addresses real-world challenges in career development and education</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🤖</div>
              <h3>AI Integration</h3>
              <p>Leveraging AI and machine learning to provide intelligent solutions</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">👥</div>
              <h3>User-Centric</h3>
              <p>Designed with user experience and accessibility in mind</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">📈</div>
              <h3>Scalable Solutions</h3>
              <p>Built with modern technologies for performance and scalability</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="projects-cta">
          <div className="cta-content">
            <h2>Interested in Collaborating?</h2>
            <p>Let's work together to build something amazing!</p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary">Get In Touch</a>
              <a href="https://github.com/nithees-sj" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
