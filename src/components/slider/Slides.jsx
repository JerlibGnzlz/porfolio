import React from "react";
import "./Slider.css";
import fss from "../../media/imagenes/fss.jpg";
import videoapp from "../../media/imagenes/videoapp.jpg";
import fcg from "../../media/imagenes/fcg.png";

const slidesInfo = [
  {
    src: fss,
    alt: "Ecommerce",
  },
  {
    src: videoapp,
    desc: "Video-App",
    // desc: "Ecommerce",
  },
  {
    src: fcg,
    a: "Fitness Center Gym",
    // desc: "Ecommerce",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      {/* <span>{slide.desc}</span> */}
      <a href="https://videos-app-ten.vercel.app/" target="_black">
        {slide.desc}
      </a>
      <a href="https://free-style-store.vercel.app/" target="_black">
        {slide.alt}
      </a>
      <a href="https://fit-center-gym.vercel.app/" target="_black">
        {slide.a}
      </a>
    </div>
  </div>
));

export default slides;
