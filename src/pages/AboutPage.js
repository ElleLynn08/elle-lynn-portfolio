import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="mb-4">Hi, I’m Elle</h1>
        <h2 className="mb-4">
          Trauma-Informed AI Researcher | Builder of Ethical, Human-Aware Systems
        </h2>

        <p className="mb-4">
          My journey began as a front-end developer who loved designing intuitive,
          beautiful user interfaces. But over time, I realized I was drawn to deeper
          questions—ones about trust, fairness, and the unseen dynamics that shape
          human–AI interaction.
        </p>

        <p className="mb-4">
          Now, I'm focused on building trauma-informed AI systems that don’t just
          classify data—they care about the people behind it. My research explores
          how machine learning can recognize emotional states, respond with context
          awareness, and uphold fairness in high-stakes, real-world environments.
        </p>

        <p className="mb-4">
          I'm currently earning my Master’s in Computer Science at Vanderbilt,
          where I’ve studied Responsible AI, cloud-native computing, microservices,
          behavioral modeling, and ethical tech development. My background includes
          federal service, and I’m especially passionate about creating tools that
          serve public safety, mental health, and ethical innovation.
        </p>

        <p className="mb-5">
          Whether I’m designing systems, conducting research, or collaborating across
          disciplines, I bring empathy, clarity, and a mission-driven heart to
          everything I build.
        </p>

        <p className="mb-5">
          If you believe technology should heal—not just work—I’d love to connect.
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






