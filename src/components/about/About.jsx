
import "./About.css";
import foto from "../../media/jjf.png";
import cv from "../../media/CVBklast.pdf";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-description">
        <h3>📌 TE CONTARE SOBRE MI...</h3>
        <p>
          <strong>
            Soy un 🇻🇪 apasionado por la informatica radicado en 🇦🇷.<br></br>
          </strong>
          <br></br> Mis habilidades tecnicas estan orientadas a tecnologias
          como:<br></br>

          <strong>
            HTML5 | CSS3 | Javascript | Typescript | Github | React | Redux |<br></br> NodeJs
            | Express | Sequelize | Postgres | MongoDb | Scrum | jira | dart | flutter | Linux distros debian | Stack: MERN - PERN 🚀.
            <br></br>
            <br></br>
          </strong>

          Entre mis habilidades blandas encontraras: <br></br>Proactividad,
          Sociabilidad, Colaboracion, Curiosidad y continuo aprendizaje.
        </p>
        <strong>
          <div className="cv">
            <a href={cv} download="CVBklast.pdf">
              <i className="fa-solid fa-download"></i>
              Descargar Currículum
            </a>
          </div>
        </strong>

      </div>
      <div className="about-img">
        <img src={foto} alt="about" />
      </div>
    </div>
  );
};

export default About;
