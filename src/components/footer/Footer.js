import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Jerlib Gonzalez</h1>
        <p>Argentina</p>
        <div className="footer-contact">
          <h3>Contactame</h3>
          <p>Ponte a trabajar</p>
        </div>
        <div className="footer-sns">
          <div className="footer-desig-by">Diseñado por Jerlib Gonzalez</div>
        </div>
        <div className="sns-link">
          <a href="https://www.linkedin.com/in/jerlibgnzlz/" target="_black">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/JerlibGnzlz" target="_black">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
