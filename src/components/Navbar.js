import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">Car Comfort</div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
