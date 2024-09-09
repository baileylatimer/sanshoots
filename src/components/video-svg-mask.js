import React, { useRef, useEffect } from "react";

const VideoSVGMask = ({ webmSrc, mp4Src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
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
      <div className="video-container">
        <video
          ref={videoRef}
          className="video-class"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
        >
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSVGMask;