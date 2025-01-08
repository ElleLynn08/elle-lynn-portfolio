import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container container">
      <div className="row">
        <div className="col-lg-6">
          <div className="content">
            <h1 className="mb-4">Hi, I am Elle Lynn</h1>
            <h2 className="mb-4">Front-end Developer, based in the United States</h2>
            <p className="mb-4">
              I am a Front-end Developer who loves coding and solving complex
              problems. Known for being meticulous with every detail and creative, I
              thrive in troubleshooting while under pressure to create beautiful and
              fully-functional applications.
            </p>
            <p className="mb-4">
              I am currently pursuing a Master’s in Computer Science at Vanderbilt
              University, where I have maintained a 3.8 GPA. Courses like AI,
              Digital Forensics, and Cloud Computing have broadened my technical
              expertise.
            </p>
            <p className="mb-5">
              I am eager to contribute my skills as part of a team, embracing both
              collaboration and independence to deliver innovative solutions.
            </p>
            <a className="btn btn-branding" href="/work" title="See My Projects">
              See My Projects
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid about-page-image"
            src="images/about-page-image.png"
            alt="Elle Lynn"
          />
        </div>
      </div>
    </div>
  );
}

export default About;



