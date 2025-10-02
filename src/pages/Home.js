import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import "./Home.css";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <section className="projects">
  <h2>My Projects</h2>
  <div className="project-cards">
    <ProjectCard
      title="Fake News Bias Audit"
      description="A Responsible AI project using SHAP to detect political and linguistic bias in fake news classification. Includes TF-IDF, topic flags, and custom SHAP visualizations."
      image="images/fake_news_audit.png"
      link="/work#fake-news-bias"
    />
    <ProjectCard
      title="Turtle Graphics Design Studio"
      description="A metamodel-based visual coding environment built in WebGME. Features plugin-based code generation, import/export logic, and custom loop handling for Python turtle graphics."
      image="images/turtle_graphics.png"
      link="/work#turtle-studio"
    />
    <ProjectCard
      title="Microservices Movie Recommender"
      description="A high-performance Spring WebFlux microservice using ParallelFlux and reactive programming to recommend movies asynchronously."
      image="images/microservices_test.png"
      link="/work#microservices"
    />
    <ProjectCard
      title="Forks n' Filters"
      description="A recipe filtering platform built with Flask and React. Features dietary preference options, custom filtering, and API integration."
      image="images/forks_n_filters.png"
      link="/work#forks-n-filters"
    />
    <ProjectCard
      title="Atmospheric Weather App"
      description="A single-page weather app leveraging React and Flask with pattern implementation, forecasting insights, and easy navigation."
      image="images/atmospheric_weather.png"
      link="/work#weather-app"
    />
    <ProjectCard
      title="Solitaire Game"
      description="A full-stack online solitaire game built using MongoDB, Node.js, and JavaScript for backend logic and smooth gameplay."
      image="images/solitaire.png"
      link="/work#solitaire"
    />
  </div>
</section>

    </main>
  );
}

export default Home;





