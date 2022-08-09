import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src: "https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    alt: "Project 1",
    desc: "Video-App",
  },
  {
    src: "https://blog.interdominios.com/wp-content/2008/Requisitos-legales-para-tu-tienda-online.jpg",
    alt: "Project 2",
    desc: "E-Free Style Store",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
