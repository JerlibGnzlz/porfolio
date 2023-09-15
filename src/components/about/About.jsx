
import "./About.css";
import foto from "../../media/jjf.png";
import cv from "../../media/CVBK.pdf";

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
          </strong>
          <br></br>
          <br></br>
          Entre mis habilidades blandas encontraras: <br></br>Proactividad,
          Sociabilidad, Colaboracion, Curiosidad y continuo aprendizaje.
        </p>
      </div>
      <div className="cv">
        <a href={cv} download="CVBK.pdf">
          {/* <i className="fa-solid fa-file-pdf"></i> */}
          <i className="fa-solid fa-download"></i>
          Download-CV
        </a>
      </div>
      <div className="about-img">
        <img src={foto} alt="about" />
      </div>
    </div>
  );
};

export default About;
