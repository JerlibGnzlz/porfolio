import React from "react";
import "./Slider.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Mis Projectos</h2>
      </div>

      <Carousel
        arrows
        slidesPerPage={3}
        infinite
        animationSpeed={200}
        centerd
        offset={50}
        itemWidth={400}
        slides={Slides}
      />
    </div>
  );
};

export default Slider;
