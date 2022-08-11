import React from "react";
import "./About.css";
import foto from "../../media/jj.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-description">
        <h3>📌 Te contare sobre mi...</h3>
        <p>
          <strong>
            Soy un 🇻🇪 apasionado por la informatica radicado en 🇦🇷.<br></br>
          </strong>
          <br></br> Mis habilidades tecnicas estan orientadas a tecnologias
          como:<br></br>
          <strong>
            HTML5 | CSS3 | Javascript | Github | React | Redux | NodeJs |
            Express | Sequelize | Postgres | MongoDb 🚀.
          </strong>
          <br></br>
          <br></br>
          entre mis habilidades blandas encontraras: <br></br>Proactividad,
          Sociabilidad, Colaboracion, Curiosidad y continuo aprendizaje.
        </p>
      </div>
      <div className="about-img">
        <img src={foto} alt="about"></img>
      </div>
    </div>
  );
};

export default About;
