import React from "react";
import "./Work.css";

function Work() {
  return (
    <main className="work-page">
      <h1>My Projects</h1>
      <section id="forks-n-filters">
        <h2>Forks n' Filters</h2>
        <p>
          A recipe filtering platform built with Flask and React. Features dietary preference options, custom filtering, and API integration.
        </p>
        <img src="images/forks_n_filters.png" alt="Forks n' Filters preview" />
      </section>
      <section id="weather-app">
        <h2>Atmospheric Weather App</h2>
        <p>
          A single-page weather app leveraging React and Flask with pattern implementation, forecasting insights, and easy navigation.
        </p>
        <img src="images/atmospheric_weather.png" alt="Atmospheric Weather App preview" />
      </section>
      <section id="solitaire">
        <h2>Solitaire Game</h2>
        <p>
          A full-stack online solitaire game built using MongoDB, Node.js, and JavaScript for backend logic and smooth gameplay.
        </p>
        <img src="images/solitaire.png" alt="Solitaire Game preview" />
      </section>
    </main>
  );
}

export default Work;

