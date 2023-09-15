import React from "react";
import "./Slider.css";
import fss from "../../media/imagenes/fss.jpg";
import videoapp from "../../media/imagenes/videoapp.jpg";
import fcg from "../../media/imagenes/fcg.png";
import csj from "../../media/imagenes/csj.png";
import cnt from "../../media/imagenes/connecta.png";


const slidesInfo = [
  {
    src: fss,
    a: "Ecommerce",
  },
  {
    src: videoapp,
    b: "Video-App",

  },
  {
    src: fcg,
    c: "Fitness Center Gym",

  },
  {
    src: csj,
    d: "Coop. San Jose",

  },
  {
    src: cnt,
    e: "Connecta",

  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      {/* <span>{slide.desc}</span> */}
      <a href="https://videos-app-ten.vercel.app/" target="_black">
        {slide.b}
      </a>
      <a href="https://free-style-store.vercel.app/" target="_black">
        {slide.a}
      </a>
      <a href="https://fit-center-gym.vercel.app/" target="_black">
        {slide.c}
      </a>
      <a href="https://stagging-csj.vercel.app/auth/" target="_black">
        {slide.d}
      </a>
      <a href="https://connecta-v1.vercel.app/" target="_black">
        {slide.e}
      </a>
    </div>
  </div>
));

export default slides;
