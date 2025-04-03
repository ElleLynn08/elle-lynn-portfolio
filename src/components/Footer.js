import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="container">
      <div className="contact-box justify-content-between mb-5 d-none d-md-flex">
        <div>
          <h3>Work Inquiry</h3>
          <p className="text-muted">Let's work together</p>
        </div>
        <div>
        <a href="mailto:ElleLynn08@icloud.com" title="Email Elle" className="btn btn-branding">

            Contact me
          </a>
        </div>
      </div>
      <div className="social-links d-flex justify-content-center mb-5">
        <a
          href="https://github.com/ElleLynn08"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FontAwesomeIcon icon={faSquareGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/elle-lynn-a7a7a1263"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="mailto:ElleLynn08@icloud.com"
          rel="noopener noreferrer"
          title="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <p className="text-center">
        This portfolio was coded with 🩶 by <b>Elle Lynn</b>, and is{" "}
        <a
          href="https://github.com/ElleLynn08"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced.
        </a>
      </p>
      <p className="text-center small-text">
        © {new Date().getFullYear()} Elle Lynn. All Rights Reserved. Michelle Lynn George.
      </p>
    </footer>
  );
}

export default Footer;


