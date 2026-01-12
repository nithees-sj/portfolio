import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-gray-900 hover:opacity-80 transition-opacity">
          Nithees SJ
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 justify-center items-center relative w-8 h-8 group"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          ></span>
        </button>

        <div
          className={`absolute md:static top-full left-0 right-0 md:flex gap-8 transition-all duration-300 ${
            menuOpen
              ? 'visible bg-white/95 backdrop-blur-md shadow-lg'
              : 'invisible md:visible'
          } ${menuOpen ? 'flex flex-col p-6' : ''}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleLinkClick}
              className={`relative font-semibold text-lg transition-all duration-300 py-2 md:py-0 ${
                isActive(link.path)
                  ? 'text-gray-900'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
