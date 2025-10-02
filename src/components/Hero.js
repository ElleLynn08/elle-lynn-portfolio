import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
  <div className="hero-content">
    <h1>Hello, I am</h1>
    <h2>Elle Lynn</h2>
    <p>Trauma-Informed AI Researcher | Building Ethical, Explainable Systems</p>
    <p className="subtagline">
      Exploring safety, fairness, and emotional intelligence in machine learning systems
    </p>
    <a href="/contact" className="btn-branding" title="Contact Me">
      Contact Me
    </a>
  </div>
</section>

  );
}

export default Hero;





