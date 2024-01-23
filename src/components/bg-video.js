import React, { useRef } from "react";

const BackgroundVideo = (props) => {
  const videoRef = useRef(null);

  const handleUserGesture = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  };

  return (
    <video
      className="background-video"
      autoPlay
      loop
      muted
      playsInline
      ref={videoRef}
      onClick={handleUserGesture} // Add user gesture event handler
      onTouchStart={handleUserGesture} // Add user gesture event handler
    >
      <source src={props.video} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;