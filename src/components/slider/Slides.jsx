import React from "react";
import "./Slider.css";
import fss from "../../media/imagenes/fss.jpg";
import videoapp from "../../media/imagenes/videoapp.jpg";

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
    </div>
  </div>
));

export default slides;
