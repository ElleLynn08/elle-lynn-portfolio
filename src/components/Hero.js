import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I am</h1>
        <h2>Elle Lynn</h2>
        <p>Front-end Engineer Empowering Intuitive Design and AI Integration</p>
        <a href="/contact" className="btn-branding" title="Contact Me">
          Contact Me
        </a>
      </div>
      <img src="images/hero-portrait.png" alt="Elle Lynn" />
    </section>
  );
}

export default Hero;





