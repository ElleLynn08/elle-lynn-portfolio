import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I am</h1>

        <h2>Elle Lynn</h2>

        <p>
          <strong>
            Technology Operations • Systems Thinking • Emerging Technologies
          </strong>
        </p>

        <p className="subtagline">
          Curious by nature. Driven by purpose. Passionate about connecting
          technology, people, and ideas to solve meaningful challenges.
        </p>

        <a href="/contact" className="btn-branding" title="Contact Me">
          Contact Me
        </a>
      </div>

      <img src="images/hero-portrait.png" alt="Elle Lynn" />
    </section>
  );
}

export default Hero;
