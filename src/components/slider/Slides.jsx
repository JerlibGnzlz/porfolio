import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src: "https://i.pinimg.com/564x/38/8b/57/388b577ab7bd64c38019d0603352d9c8.jpg",
    desc: "Video-App",
  },
  {
    src: "https://i.pinimg.com/564x/a4/cb/c7/a4cbc7ed47ec7c7caf096cd3288ad743.jpg",
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
