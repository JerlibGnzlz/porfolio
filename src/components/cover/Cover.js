import React from "react";
import "./Cover.css";
import coverVideo from "../../media/video.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Jerlib Gonzalez</h1>
      <p>Fullstack | Developer </p>
    </div>
  );
};

export default Cover;
