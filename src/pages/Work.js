import React from "react";
import "./Work.css";

function Work() {
  return (
    <main className="work-container">
      <h1 className="work-title">My Projects</h1>

      <section className="project-grid">
        {/* Forks n' Filters */}
        <div className="project-card">
          <video className="project-video" controls>
            <source src="videos/forks_n_filters.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="project-title">Forks n' Filters</h3>
          <p className="project-description">
            A recipe filtering platform built with Flask and React. Features dietary preference options, custom filtering, and Spoonacular API integration.
          </p>
          <details>
            <summary className="read-more">More Details</summary>
            <div className="details-body">
              <p><strong>Motivation:</strong> As an Ayurvedic nutritionist and dog mom balancing school, I wanted to simplify healthy eating.</p>
              <p><strong>Tech Stack:</strong> React · Flask · Spoonacular API · Google Cloud Run · Docker</p>
              <p><strong>Features:</strong></p>
              <ul>
                <li>Search by dietary preferences & cuisine type</li>
                <li>Responsive, intuitive layout</li>
                <li>Fully Dockerized and deployed with GCP</li>
              </ul>
              <p><strong>Challenges:</strong> Deployment on AWS failed—pivoted to Google Cloud Run successfully.</p>
              <p><strong>What I Learned:</strong> Resilience in solo dev, rapid deployment, container orchestration</p>
            </div>
          </details>
        </div>

        {/* Atmospheric Weather App */}
        <div className="project-card">
          <video className="project-video" controls>
            <source src="videos/atmospheric-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="project-title">Atmospheric Weather App</h3>
          <p className="project-description">
            A single-page weather app leveraging React and Flask with pattern implementation, forecasting insights, and easy navigation.
          </p>
          <details>
            <summary className="read-more">More Details</summary>
            <div className="details-body">
              <p><strong>Motivation:</strong> Inspired by my years in aviation and the challenges of navigating time zones and units across countries.</p>
              <p><strong>Tech Stack:</strong> React · Flask · Python · OpenWeather API</p>
              <p><strong>Design Patterns:</strong> Factory · Strategy · Singleton · Memento · Template Method</p>
              <p><strong>Features:</strong></p>
              <ul>
                <li>Current weather & 5-day forecast</li>
                <li>Unit conversion toggles (F/C, mph/kph)</li>
                <li>Local and destination time comparison</li>
              </ul>
              <p><strong>Challenges:</strong> Hosting issues on Netlify due to env configs and build settings.</p>
              <p><strong>Future Plans:</strong></p>
              <ul>
                <li>Hourly forecast carousel</li>
                <li>Web-based search history</li>
                <li>Live deployment with full frontend</li>
              </ul>
            </div>
          </details>
        </div>

        {/* Solitaire Game */}
        <div className="project-card">
          <video className="project-video" controls>
            <source src="videos/Solitaire_Game.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="project-title">Solitaire Game</h3>
          <p className="project-description">
            A full-stack online solitaire game built using MongoDB, Node.js, and JavaScript for backend logic and smooth gameplay.
          </p>
          <details>
            <summary className="read-more">More Details</summary>
            <div className="details-body">
              <p>
                Developed across multiple assignments using an agile process with video-based submissions. Includes full card move validation, backend game state tracking, and React-driven game logic. Game state stored in MongoDB.
              </p>
            </div>
          </details>
        </div>

        {/* Coming Soon */}
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








