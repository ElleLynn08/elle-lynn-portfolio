import React, { useState } from "react";
import "./Work.css";

// ===== Carousel slides for Trauma-Aware AI Trilogy =====
const trilogySlides = [
  {
    src: "images/TrilogyArc.png",
    alt: "Overview of the Trauma-Aware AI Trilogy across three phases."
  },
  {
    src: "images/poster_haunting_problem.png",
    alt: "Published poster for The Haunting Problem, the first verified phase of the trilogy."
  },
  {
    src: "images/FuzzyConfidence.png",
    alt: "Fuzzy confidence distribution with reflective, cautious, and assertive thresholds."
  },
  {
    src: "images/verificationSurface.png",
    alt: "Empathy rule satisfiability surface and symbolic verification boundary."
  },
  {
    src: "images/Top10Rules.png",
    alt: "Top 10 triggered empathy rules for the DAIC-WOZ dataset."
  },
  {
    src: "images/RuleActivationMatrix.png",
    alt: "Symbolic rule activation matrix for all 25 empathy rules."
  }
];

// ===== Simple image carousel used only on the Trilogy card =====
function ImageCarousel({ slides }) {
  const [index, setIndex] = useState(0);

  if (!slides || slides.length === 0) return null;

  const prevSlide = () => {
    setIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const slide = slides[index];

  return (
    <div className="carousel">
      <div className="carousel-image-wrapper">
        <img
          className="carousel-image"
          src={slide.src}
          alt={slide.alt}
        />
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <span className="carousel-indicator">
          {index + 1} / {slides.length}
        </span>
        <button
          type="button"
          className="carousel-arrow"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}

function Work() {
  return (
    <main className="work-container">
      <h1 className="work-title">Work With Heart, Code With Purpose</h1>
      <p className="work-subtitle">
        Explore a portfolio of creative tools, research-driven systems, and AI projects built with empathy and ethical design at their core.
      </p>

      <section className="project-grid">

        {/* Trauma-Aware AI Trilogy */}
        <div className="project-card">
          <ImageCarousel slides={trilogySlides} />

          <h3 className="project-title">Trauma-Aware AI Trilogy</h3>
          <p className="project-description">
            A trauma-informed, multimodal AI framework uniting behavioral modeling, symbolic verification, and explainable AI to
            advance emotional safety and fairness in high-stakes environments.
          </p>

          <details>
            <summary className="read-more">More Details</summary>
            <div className="details-body">
              <p>
                <strong>Overview:</strong> The completed Trauma-Aware AI Trilogy formalizes empathy as a verifiable safety
                property in AI systems. It integrates multimodal datasets (text, audio, and video microexpressions) with fuzzy
                confidence calibration and Z3-based symbolic verification to detect suppression, dissociation, and guarded
                affect in a trauma-informed way.
              </p>

              <p>
                <strong>Publications (Zenodo, 2025):</strong><br />
                • <em>Recognizing the Unseen: A Verified, Multimodal Framework for Trauma-Informed AI</em> —{" "}
                <a
                  href="https://doi.org/10.5281/zenodo.17705532"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.5281/zenodo.17705532
                </a>
                <br />
                • <em>Empathy as Verification: Formalizing Emotional Safety through Symbolic Logic</em> —{" "}
                <a
                  href="https://doi.org/10.5281/zenodo.17639714"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.5281/zenodo.17639714
                </a>
                <br />
                • <em>The Haunting Problem: Recognizing Semantic Absence in Trauma-Aware AI</em> —{" "}
                <a
                  href="https://doi.org/10.5281/zenodo.17578153"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.5281/zenodo.17578153
                </a>
              </p>

              <p>
                <strong>Datasets & Artifacts:</strong><br />
                • <em>Trauma-Aware AI Noise Robustness Dataset</em> —{" "}
                <a
                  href="https://doi.org/10.5281/zenodo.17620950"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.5281/zenodo.17620950
                </a>
                <br />
                • <em>Poster: The Haunting Problem — Recognizing Semantic Absence in Trauma-Aware AI</em> —{" "}
                <a
                  href="https://doi.org/10.5281/zenodo.17584658"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.5281/zenodo.17584658
                </a>
              </p>

              <p>
                <strong>Tech Stack:</strong> Tech Stack: Python · Z3 SMT · Scikit-learn · Pandas · Matplotlib · DeepFace (TensorFlow backend)

              </p>
              <p>
                <strong>Keywords:</strong> Responsible AI · Symbolic Verification · Fuzzy Logic · Multimodal Learning · Empathy Modeling
              </p>
            </div>
          </details>

          <a
            href="https://github.com/ElleLynn08/trauma-informed-ai-framework.git"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            View on GitHub
          </a>
        </div>

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
              <a
                href="/documents/ForksNFilters_Report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pdf"
              >
                View Final Report (PDF)
              </a>
            </div>
          </details>

          <a
            href="https://github.com/ElleLynn08/forks-n-filters"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            View on GitHub
          </a>
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
              <a
                href="/documents/AtmosphericWeather_FinalReport.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pdf"
              >
                View Final Report (PDF)
              </a>
            </div>
          </details>

          <a
            href="https://github.com/ElleLynn08/weather-app-final"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            View on GitHub
          </a>
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
                Developed across multiple assignments using an agile process with video-based submissions.
                Includes full card move validation, backend game state tracking, and React-driven game logic.
                Game state stored in MongoDB.
              </p>
            </div>
          </details>
        </div>

        {/* Fake News Bias Audit */}
        <div className="project-card">
          <video className="project-video" controls>
            <source src="videos/FakeNews_Bias.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
              <a
                href="/documents/FakeNewsBias_Assignment6_7.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pdf"
              >
                View Final Report (PDF)
              </a>
            </div>
          </details>

          <a
            href="https://github.com/ElleLynn08/fake-news-bias-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            View on GitHub
          </a>
        </div>

        {/* Turtle Graphics Design Studio */}
        <div className="project-card">
          <video className="project-video" controls>
            <source src="videos/RunAll_TurtleGraphics.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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

          <a
            href="https://github.com/ElleLynn08/turtle-design-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            View on GitHub
          </a>
        </div>

        {/* Microservices Movie Recommender */}
        <div className="project-card">
          <img
            className="project-image"
            src="images/microservices_test.png"
            alt="Microservices Recommender Test Output"
          />
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
        </div>

        {/* Coming Next */}
        <div className="project-card sparkle-card">
          <h3 className="project-title">
            More Research Coming Soon <span role="img" aria-label="sparkles">✨</span>
          </h3>
          <p className="project-description">
            Additional work expanding the Trauma-Aware AI Trilogy into runtime empathy monitoring and hybrid reasoning systems will be released in 2026.
            <br /><br />
            Stay tuned for new repos, live demos, and the upcoming Responsible AI presentation series.
          </p>
        </div>

      </section>
    </main>
  );
}

export default Work;















