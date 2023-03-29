import React from "react";
import "../About/About.css";
import about from "../../Assets/about.jpg";

export default function About() {
  return (
    <div className="cardAbout-container">
      <article className="card-about">
        <img src={about} alt="about of web developer"></img>
        <div>
          <h2>Gino Tapia Barrios</h2>
          <p>React Developer</p>
        </div>
      </article>
    </div>
  );
}
