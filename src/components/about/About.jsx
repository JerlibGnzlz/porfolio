import "./About.css";
import foto from "../../media/nueva.png";
import cv from "../../media/FS.pdf";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-description">
        <h1>Te Contare sobre mi.</h1>

        <h2>Soy un 🇻🇪 apasionado por la informatica radicado en 🇦🇷.</h2>
        <p>Mis habilidades tecnicas estan orientadas a tecnologias</p>


        <h4>
          Html5 | Css3 | Javascript | Typescript | Github | React | React
          Native | Next | NodeJs | Express | Sequelize | Prisma | Postgres | MongoDb | Scrum| Swagger | Render | Vercel | Insomnia REST | Jira | Linux debian.

          <div>
            <span className="span">
              <h2>
                Stack:
                MERN - PERN 🚀.
              </h2>
            </span>
          </div>
        </h4>

        <div className="habilidades">
          <h3>
            <p className="span1">
              Entre mis habilidades blandas encontraras:
            </p>
            Proactividad,
            Sociabilidad, Colaboracion, Curiosidad y continuo aprendizaje.
          </h3>
        </div>
      </div>




      <div id="outer">
        <div className="button_slide slide_left">
          <a href={cv} download="CVBklast.pdf">
            <i className="fa-solid fa-download"></i>
            <p className="Curriculum">
              Descargar Currículum
            </p>
          </a>
        </div>
      </div>

      <div className="about-img">
        <img src={foto} alt="about" />
      </div>

    </div>

  );
};

export default About;
