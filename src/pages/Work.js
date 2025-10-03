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

        {/* Fake News Bias Audit */}
        <div className="project-card">
          <img className="project-image" src="images/fake_news_audit.png" alt="Fake News Bias Audit" />
          <h3 className="project-title">Fake News Bias Audit</h3>
          <p className="project-description">
            A Responsible AI project using SHAP to reveal bias in fake vs. real news classification.
            Features custom topic flags, engineered features, and TF-IDF explainability.
          </p>
          <details>
            <summary className="read-more">More Details</summary>
            <div className="details-body">
              <p><strong>Motivation:</strong> Explore fairness and explainability in NLP models using real-world datasets.</p>
              <p><strong>Tech Stack:</strong> Python · SHAP · Pandas · Scikit-learn · Jupyter</p>
              <p><strong>Features:</strong></p>
              <ul>
                <li>Structured features (topic, tone, clickbait detection)</li>
                <li>TF-IDF word-level SHAP visualizations</li>
                <li>Bias surfacing across political, religious, and emotional categories</li>
              </ul>
              <p><strong>What I Learned:</strong> How model predictions reflect not just accuracy, but assumptions — and how to interpret them responsibly.</p>
            </div>
          </details>
          <a href="https://github.com/ElleLynn08/fake-news-bias-audit" target="_blank" rel="noopener noreferrer" className="btn-github">
            View on GitHub
          </a>
        </div>

        {/* Turtle Graphics Design Studio */}
        <div className="project-card">
          <img className="project-image" src="images/turtle_graphics.png" alt="Turtle Graphics Design Studio" />
          <h3 className="project-title">Turtle Graphics Design Studio</h3>
          <p className="project-description">
            A WebGME-based modeling tool for creating Python turtle graphics visually. Includes code generation, plugin execution, and loop/logic design.
          </p>
          <details>
            <summary className="read-more">More Details</summary>
            <div className="details-body">
              <p><strong>Motivation:</strong> To build a creative, visual IDE for beginner-friendly programming rooted in model-integrated computing.</p>
              <p><strong>Tech Stack:</strong> JavaScript · WebGME · Python (Turtle) · Node.js</p>
              <p><strong>Features:</strong></p>
              <ul>
                <li>Visual metamodel supporting commands, functions, and for-loops</li>
                <li>Import/Export plugins for .py files</li>
                <li>Dynamic color logic and command chaining</li>
              </ul>
              <p><strong>Challenges:</strong> Plugin sequencing, loop expansion, and state tracking across generated code.</p>
            </div>
          </details>
          <a href="https://github.com/ElleLynn08/turtle-design-studio" target="_blank" rel="noopener noreferrer" className="btn-github">
            View on GitHub
          </a>
        </div>

        {/* Microservices Movie Recommender */}
        <div className="project-card">
          <img className="project-image" src="images/microservices_test.png" alt="Microservices Recommender Test Output" />
          <h3 className="project-title">Parallel Movie Recommender</h3>
          <p className="project-description">
            An asynchronous microservice using Spring WebFlux and Project Reactor to deliver movie recommendations in parallel.
          </p>
          <details>
            <summary className="read-more">More Details</summary>
            <div className="details-body">
              <p><strong>Motivation:</strong> To explore reactive programming and optimize recommendation throughput using functional paradigms.</p>
              <p><strong>Tech Stack:</strong> Java · Spring Boot · Spring WebFlux · Project Reactor · JPA</p>
              <p><strong>Features:</strong></p>
              <ul>
                <li>Functional service logic with ParallelFlux</li>
                <li>Client + Database microservices with reactive endpoints</li>
                <li>Integration-tested with full dependency injection</li>
              </ul>
              <p><strong>What I Learned:</strong> Reactive streams, microservice architecture, and full-stack test orchestration in Java.</p>
            </div>
          </details>
          <a href="https://github.com/ElleLynn08/microservices-recommender" target="_blank" rel="noopener noreferrer" className="btn-github">
            View on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default Work;









