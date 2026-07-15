import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="mb-4">Hi, I'm Elle</h1>

        <h2 className="mb-4">
          Technology Operations • Systems Thinking • Human-Centered Design
        </h2>

        <p className="mb-4">
          I enjoy solving complex problems where technology, operations, and
          people intersect. My background spans federal operations, executive
          leadership support, UX/UI design, and graduate research in computer
          science, giving me a unique perspective on how thoughtful systems can
          improve both organizations and the people they serve.
        </p>

        <p className="mb-4">
          After earning my Master of Science in Computer Science from Vanderbilt
          University, I became increasingly fascinated by emerging
          technologies—not just artificial intelligence, but also the broader
          technologies and systems shaping our future. Whether exploring
          human-centered AI, imaging systems, photonics, quantum technologies,
          or technology operations, I'm driven by curiosity and a desire to
          understand how seemingly different disciplines connect to solve
          meaningful challenges.
        </p>

        <p className="mb-4">
          Throughout my career, I've worked in environments where trust,
          adaptability, and sound judgment matter. I enjoy learning quickly,
          collaborating across disciplines, translating complex technical ideas
          into practical solutions, and continuously improving the systems and
          processes that help people succeed.
        </p>

        <p className="mb-5">
          Whether I'm supporting mission-focused organizations, exploring
          emerging technologies, or designing better user experiences, my goal
          remains the same: to combine curiosity, empathy, and analytical
          thinking to make complicated things a little clearer—and a little
          better.
        </p>

        <p className="mb-5">
          If you're looking for someone who loves learning, enjoys connecting
          ideas across disciplines, and isn't afraid to ask thoughtful
          questions, I'd love to connect.
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
