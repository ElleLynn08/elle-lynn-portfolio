import React from "react";
import "./Work.css";

function Work() {
  return (
    <main className="work-container">
      <h1 className="work-title">My Projects</h1>

      <section className="project-grid">
        <div className="project-card">
          <video className="project-video" controls>
            <source src="videos/forks_n_filters.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="project-title">Forks n' Filters</h3>
          <p className="project-description">
            A recipe filtering platform built with Flask and React. Features dietary preference options, custom filtering, and Spoonacular API integration.
          </p>
        </div>

        <div className="project-card">
          <video className="project-video" controls>
            <source src="videos/atmospheric-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="project-title">Atmospheric Weather App</h3>
          <p className="project-description">
            A single-page weather app leveraging React and Flask with pattern implementation, forecasting insights, and easy navigation.
          </p>
        </div>

        <div className="project-card">
          <video className="project-video" controls>
            <source src="videos/Solitaire_Game.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="project-title">Solitaire Game</h3>
          <p className="project-description">
            A full-stack online solitaire game built using MongoDB, Node.js, and JavaScript for backend logic and smooth gameplay.
          </p>
        </div>

        <div className="project-card sparkle-card">
          <h3 className="project-title">
            More Projects Coming Soon{" "}
            <span role="img" aria-label="sparkles">✨</span>
          </h3>
          <p className="project-description">
            Stay tuned for exciting new builds — from my Responsible AI and Microservices classes to interactive frontend magic!
          </p>
        </div>
      </section>
    </main>
  );
}

export default Work;





