import React from "react";
import "./Info.css";
import html from "../../media/imagenes/html.png";
import css from "../../media/imagenes/css.png";
import js from "../../media/imagenes/js.png";
import react from "../../media/imagenes/react.png";
import redux from "../../media/imagenes/redux.png";
import node from "../../media/imagenes/node.png";
import express from "../../media/imagenes/express.png";
import pg from "../../media/imagenes/pg.png";
import sc from "../../media/imagenes/sc.png";
import mdb from "../../media/imagenes/mdb.png";
import g from "../../media/imagenes/g.png";
import linux from "../../media/imagenes/li.png";
import vs from "../../media/imagenes/vs.png";

const tecnologia = "Tecnologias que Utilizo. ";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info">
        <div className="image">
          <img src={vs} alt="img"></img>
        </div>
        <div className="image">
          <img src={html} alt="img"></img>
        </div>
        <div className="image">
          <img src={css} alt="img"></img>
        </div>
        <div className="image">
          <img src={js} alt="img"></img>
        </div>
        <div className="image">
          <img src={react} alt="img"></img>
        </div>
        <div className="image">
          <img src={redux} alt="img"></img>
        </div>
        <div className="image">
          <img src={node} alt="img"></img>
        </div>
        <div className="image">
          <img src={express} alt="img"></img>
        </div>
        <div className="image">
          <img src={pg} alt="img"></img>
        </div>
        <div className="image">
          <img src={sc} alt="img"></img>
        </div>
        <div className="image">
          <img src={mdb} alt="img"></img>
        </div>
        <div className="image">
          <img src={g} alt="img"></img>
        </div>
        <div className="image">
          <img src={linux} alt="img"></img>
        </div>
        <div className="texto">
          <h1>{tecnologia}</h1>
        </div>
      </div>
    </div>
  );
};

export default Info;
