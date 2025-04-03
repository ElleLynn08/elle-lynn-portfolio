import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="mb-4">Hi, I’m Elle</h1>
        <h2 className="mb-4">Engineer with a Creative Soul, a Curious Mind, and a Mission-Driven Heart</h2>

        <p className="mb-4">
          I started my journey as a front-end engineer, but over time, I’ve grown into something more—a creative problem-solver who’s passionate about using technology to make a real difference. I still love crafting intuitive, beautiful user interfaces, but my focus has expanded to include AI, data science, and systems that support public safety and human well-being.
        </p>

        <p className="mb-4">
          I'm currently earning my Master’s in Computer Science at Vanderbilt, where I’ve studied Responsible AI, cloud-native computing, microservices, digital forensics, and ethical tech development. My background includes federal service, and I’m especially passionate about projects that combine engineering with real-world impact.
        </p>

        <p className="mb-5">
          Whether I’m building, researching, or collaborating, I show up with empathy, grit, and a deep sense of purpose. I believe the best tech doesn’t just work—it helps. It protects. It empowers. That’s the kind of work I’m here to do.
        </p>

        <a className="btn-branding" href="/work" title="See My Projects">
          See My Projects
        </a>
      </div>

      <div className="about-image">
        <img
          className="img-fluid"
          src="images/about-page-image.png"
          alt="Elle Lynn"
        />
      </div>
    </div>
  );
}

export default About;





