import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h2>Jerlib Gonzalez</h2>
        <p>🇦🇷 Argentina - Buenos Aires </p>
      </div>
      <div className="footer-contact">
        <h3>Contactame</h3>
        <p>Y comencemos a trabajar.!</p>
      </div>
      <div className="footer-sns">
        <div className="footer-desig-by"></div>
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
