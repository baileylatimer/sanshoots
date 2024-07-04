import React, { useRef } from "react";
import { Link } from "gatsby";

const VideoSlide = ({ videoSrc, title, tag, linkTo }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <Link to={linkTo} className="video-slide pl-4">
      <div className="video-container">
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="overlay"></div>
        <div className="video-info flex justify-between items-center w-full">
          <h3 className="color-bg">{title}</h3>
          <p className="color-bg">{tag}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoSlide;
