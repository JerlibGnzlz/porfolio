import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Jerlib Gonzalez</h1>
      <p>FullStack_Developer 🧮 </p>
    </div>
  );
};

export default Cover;