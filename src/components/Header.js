import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="container">
      <nav className="d-flex justify-content-between">
        <Link to="/" title="Homepage">
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
        </Link>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" onClick={closeMenu} title="Homepage">
              Home
            </Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about" onClick={closeMenu} title="About Elle">
              About
            </Link>
          </li>
          <li className={location.pathname === "/work" ? "active" : ""}>
            <Link to="/work" onClick={closeMenu} title="Elle's Work">
              Work
            </Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact" onClick={closeMenu} title="Contact Elle">
              Contact
            </Link>
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
















