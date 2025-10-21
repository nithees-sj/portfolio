import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">Nithees SJ</Link>
        </div>

        <button
          className={`navbar-hamburger ${menuOpen ? 'active' : ''}`}
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="navbar-link" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className="navbar-link" onClick={handleLinkClick}>About</Link>
          <Link to="/projects" className="navbar-link" onClick={handleLinkClick}>Projects</Link>
          <Link to="/contact" className="navbar-link" onClick={handleLinkClick}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
