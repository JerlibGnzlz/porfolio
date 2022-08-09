import React from "react";
import "./About.css";
import foto from "../../media/jj.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-description">
        <h3>Te contare sobre mi</h3>
        <p>
          Soy un apasionado por la informatica y la tecnologia. siempre e
          trabajo en el area de IT como Analista soporte tecnico y esta vez
          creando aplicaciones landingPage y Ecomeerce.
        </p>
      </div>
      <div className="about-img">
        <img src={foto} alt="about"></img>
      </div>
    </div>
  );
};

export default About;
