import React, { useRef, useEffect, useState } from "react";

const VideoSVGMask = ({ webmSrc, mp4Src, fallbackImageSrc }) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if the device is running iOS
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    setIsIOS(iOS);

    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }

    const playVideoOnTouch = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Autoplay failed:", error);
        });
      }
    };

    document.addEventListener('touchstart', playVideoOnTouch);

    return () => {
      document.removeEventListener('touchstart', playVideoOnTouch);
    };
  }, []);

  const handleVideoLoaded = () => {
    console.log("Video loaded successfully");
    setIsVideoLoaded(true);
  };

  const handleVideoError = (e) => {
    console.error("Video loading error:", e);
    setHasVideoError(true);
  };

  return (
    <div className="video-svg-wrapper">
      <svg className="svg-class" viewBox="0 0 193 473" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
            <path d="M0 0.8689C0 0.9571 0.1887 1 0.5 1C0.8113 1 1 0.9571 1 0.8689V0.1311C1 0.0429 0.8113 0 0.5 0C0.1887 0 0 0.0429 0 0.1311V0.8689Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="video-container-2">
        <img 
          src={fallbackImageSrc} 
          alt="Video fallback" 
          className={`fallback-image ${isVideoLoaded && !hasVideoError ? 'hidden' : ''}`}
        />
        <video
          ref={videoRef}
          className={`video-class-2 ${isVideoLoaded && !hasVideoError ? '' : 'hidden'}`}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
        >
          {isIOS ? (
            <>
              <source src={mp4Src} type="video/mp4" />
              <source src={webmSrc} type="video/webm" />
            </>
          ) : (
            <>
              <source src={webmSrc} type="video/webm" />
              <source src={mp4Src} type="video/mp4" />
            </>
          )}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSVGMask;