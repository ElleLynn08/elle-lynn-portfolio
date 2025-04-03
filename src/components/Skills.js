import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faPython,
  faAws,
  faJsSquare,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud, faBrain } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-icons">
        <div className="icon spin">
          <FontAwesomeIcon icon={faReact} className="fa-icon" />
          <p>React</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPython} className="fa-icon" />
          <p>Python</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faAws} className="fa-icon" />
          <p>AWS</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faCloud} className="fa-icon" />
          <p>Cloud</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faBrain} className="fa-icon" />
          <p>AI</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faJsSquare} className="fa-icon" />
          <p>JavaScript</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faHtml5} className="fa-icon" />
          <p>HTML</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faCss3Alt} className="fa-icon" />
          <p>CSS</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;







