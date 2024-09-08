import React, { useEffect, useRef } from "react";

const VideoSVGMask = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Attempt to play the video after a short delay
      const playPromise = setTimeout(() => {
        videoRef.current.play().catch(error => {
          // Autoplay was prevented. You might want to show a play button here.
          console.log("Autoplay prevented:", error);
        });
      }, 1000);

      return () => clearTimeout(playPromise);
    }
  }, []);

  return (
    <div className="video-svg-wrapper">
      <svg className="svg-class" viewBox="0 0 193 473" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
            <path d="M0 0.8689C0 0.9571 0.1887 1 0.5 1C0.8113 1 1 0.9571 1 0.8689V0.1311C1 0.0429 0.8113 0 0.5 0C0.1887 0 0 0.0429 0 0.1311V0.8689Z" />
          </clipPath>
        </defs>
      </svg>
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        className="video-class"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSVGMask;