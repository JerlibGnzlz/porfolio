
import "./About.css";
import foto from "../../media/nueva.png";
import cv from "../../media/FS.pdf";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-description">
        <h3>Te Contare sobre mi.</h3>
        <p>
          <strong>
            Soy un 🇻🇪 apasionado por la informatica radicado en 🇦🇷.
          </strong>
     
          <p>Mis habilidades tecnicas estan orientadas a tecnologias</p>
          <strong>
            HTML5 | CSS3 | Javascript | Typescript | Github | React | React Native |
             NodeJs
            | Express | Sequelize | Postgres | MongoDb | Scrum | jira | Linux distros debian | Stack: MERN - PERN 🚀.
          </strong>
          <br></br><br></br>
          Entre mis habilidades blandas encontraras: <br></br>Proactividad,
          Sociabilidad, Colaboracion, Curiosidad y continuo aprendizaje.
            <div className="cv">
              <a href={cv} download="CVBklast.pdf">
                <i className="fa-solid fa-download"></i>
                Descargar Currículum
              </a>
            </div>
        </p>
        {/* <strong>
        </strong> */}

      <div className="about-img">
        <img src={foto} alt="about" />
      </div>
      </div>
    </div>
  );
};

export default About;
