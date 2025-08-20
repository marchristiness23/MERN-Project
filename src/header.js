import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);  // State untuk toggle menu

  const toggleMenu = () => setMenuOpen(!menuOpen);  // Toggle menu saat diklik

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src="/Assets/logo_afforgadget.png" alt="Affor Gadget" />
        </div>

        {/* Navigasi */}
        <nav>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Tombol Hamburger */}
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
