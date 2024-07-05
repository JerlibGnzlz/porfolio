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
              <p>
                Stack:
                <h2>
                  MERN - PERN 🚀.
                </h2>
              </p>
            </span>
          </div>
        </h4>

        <div className="habilidades">
          <h3>
            Entre mis habilidades blandas encontraras: Proactividad,
            Sociabilidad, Colaboracion, Curiosidad y continuo aprendizaje.
          </h3>
        </div>
      </div>


      <div className="cv">
        <a href={cv} download="CVBklast.pdf">
          <i className="fa-solid fa-download"></i>
          Descargar Currículum
        </a>
      </div>


      <div className="about-img">
        <img src={foto} alt="about" />
      </div>

    </div>




  );
};

export default About;
