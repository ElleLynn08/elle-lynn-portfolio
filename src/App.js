import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <section className="skills-section">
          <h2 className="section-title">Skills</h2>
          <Skills />
        </section>
        <section className="projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="project-grid">
            <ProjectCard
              image="/images/forks-n-filters.png"
              title="Forks n' Filters"
              description="A recipe management app using React and Flask."
              link="#"
            />
            <ProjectCard
              image="/images/weather-app.png"
              title="Atmospheric Weather App"
              description="A weather app built with APIs and data visualization."
              link="#"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;


