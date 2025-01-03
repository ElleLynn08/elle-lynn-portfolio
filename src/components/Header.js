import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container">
      <nav className="d-flex justify-content-between">
        <a href="/" title="Homepage">
          <img
            src="images/logo-larger.png"
            className="logo-large"
            alt="Elle Lynn Logo"
          />
          <img
            src="images/logo-small.png"
            className="logo-small"
            alt="Elle Lynn Logo"
          />
        </a>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className="active">
            <a href="/" title="Homepage">Home</a>
          </li>
          <li>
            <a href="/about" title="About Elle">About</a>
          </li>
          <li>
            <a href="/work" title="Elle's Work">Work</a>
          </li>
          <li>
            <a href="/contact" title="Contact Elle">Contact</a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>
      </nav>
    </header>
  );
}

export default Header;










