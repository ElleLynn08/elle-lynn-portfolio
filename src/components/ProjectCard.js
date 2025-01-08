import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ image, title, description, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} preview`} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <Link to={link} className="project-link">
          Learn More
        </Link>
      </div>
    </div>
  );
}

// Prop validation
ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;


