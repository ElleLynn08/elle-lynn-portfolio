import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import "./Home.css";

function Home() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isMobile || isIOS) {
      // --- Force instant visibility for mobile/iOS ---
      document
        .querySelectorAll(".scroll-fade, .project-card-wrapper")
        .forEach((el) => {
          el.classList.add("force-visible");
          el.classList.add("in-view");
        });
      return; // Skip observer entirely
    }

    // --- Desktop / iPad fade-in animations ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    const targets = document.querySelectorAll(".scroll-fade");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <Skills />

      {/* =========================
          FEATURED RESEARCH SECTION
      ========================== */}
      <section className="featured-research scroll-fade">
        <h2>Featured Research</h2>

        <div className="featured-content">
          <img
            src="images/TrilogyArc.png"
            alt="Visual arc showing the full Trauma-Aware AI Trilogy: The Haunting Problem, Empathy as Verification, and Recognizing the Unseen"
            className="featured-image"
          />

          <div className="featured-text scroll-stagger delay-1">
            <h3>Trauma-Aware AI Trilogy</h3>

            <p>
              A verified, trauma-informed AI framework spanning three research
              phases — <em>The Haunting Problem</em>,{" "}
              <em>Empathy as Verification</em>, and{" "}
              <em>Recognizing the Unseen</em>. Together, these works introduce a
              multimodal, symbolic, and ethically grounded approach to detecting
              emotional suppression, dissociation, and guarded affect in machine
              learning systems.
            </p>

            <p>
              <strong>Published on Zenodo:</strong>
              <br />
              <a
                href="https://doi.org/10.5281/zenodo.17705532"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recognizing the Unseen
              </a>{" "}
              ·{" "}
              <a
                href="https://doi.org/10.5281/zenodo.17639714"
                target="_blank"
                rel="noopener noreferrer"
              >
                Empathy as Verification
              </a>{" "}
              ·{" "}
              <a
                href="https://doi.org/10.5281/zenodo.17578153"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Haunting Problem
              </a>
            </p>

            <a href="/work" className="btn-learn-more scroll-stagger delay-2">
              Explore the Trilogy
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          PROJECTS SECTION
      ========================== */}
      <section className="projects scroll-fade">
        <h2>My Projects</h2>

        <div className="project-cards">
          <div
            className="scroll-fade project-card-wrapper"
            style={{ transitionDelay: "0s" }}
          >
            <ProjectCard
              title="Fake News Bias Audit"
              description="A Responsible AI project using SHAP to detect political and linguistic bias in fake news classification. Includes TF-IDF, topic flags, and custom SHAP visualizations."
              image="images/fake_news_audit.png"
              link="/work#fake-news-bias"
            />
          </div>

          <div
            className="scroll-fade project-card-wrapper"
            style={{ transitionDelay: "0.15s" }}
          >
            <ProjectCard
              title="Turtle Graphics Design Studio"
              description="A metamodel-based visual coding environment built in WebGME. Features plugin-based code generation, import/export logic, and custom loop handling for Python turtle graphics."
              image="images/turtle_graphics.png"
              link="/work#turtle-studio"
            />
          </div>

          <div
            className="scroll-fade project-card-wrapper"
            style={{ transitionDelay: "0.3s" }}
          >
            <ProjectCard
              title="Microservices Movie Recommender"
              description="A high-performance Spring WebFlux microservice using ParallelFlux and reactive programming to recommend movies asynchronously."
              image="images/microservices_test.png"
              link="/work#microservices"
            />
          </div>

          <div
            className="scroll-fade project-card-wrapper"
            style={{ transitionDelay: "0.45s" }}
          >
            <ProjectCard
              title="Forks n' Filters"
              description="A recipe filtering platform built with Flask and React. Features dietary preference options, custom filtering, and API integration."
              image="images/forks_n_filters.png"
              link="/work#forks-n-filters"
            />
          </div>

          <div
            className="scroll-fade project-card-wrapper"
            style={{ transitionDelay: "0.6s" }}
          >
            <ProjectCard
              title="Atmospheric Weather App"
              description="A single-page weather app leveraging React and Flask with pattern implementation, forecasting insights, and easy navigation."
              image="images/atmospheric_weather.png"
              link="/work#weather-app"
            />
          </div>

          <div
            className="scroll-fade project-card-wrapper"
            style={{ transitionDelay: "0.75s" }}
          >
            <ProjectCard
              title="Solitaire Game"
              description="A full-stack online solitaire game built using MongoDB, Node.js, and JavaScript for backend logic and smooth gameplay."
              image="images/solitaire.png"
              link="/work#solitaire"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
