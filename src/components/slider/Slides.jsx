import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src: "https://i.ibb.co/rZmZVSP/videoapp.jpg",
    desc: "Video-App",
  },
  {
    src: "https://i.ibb.co/HBGMBdv/fss.jpg",
    alt: "Ecommerce",
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
