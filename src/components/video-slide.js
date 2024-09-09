import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";

const VideoSlide = ({ webmSrc, mp4Src, fallbackImageSrc, title, tag, linkTo }) => {
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

  const handleMouseEnter = () => {
    if (videoRef.current && !isIOS) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !isIOS) {
      videoRef.current.pause();
    }
  };

  return (
    <Link to={linkTo} className="video-slide pl-4">
      <div className="video-container">
        <img 
          src={fallbackImageSrc} 
          alt={title}
          className={`fallback-image ${isVideoLoaded && !hasVideoError ? 'hidden' : ''}`}
        />
        <video
          ref={videoRef}
          className={`video-element ${isVideoLoaded && !hasVideoError ? '' : 'hidden'}`}
          loop
          muted
          playsInline
          webkit-playsinline="true"
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
        <div className="overlay"></div>
        <div className="video-info flex justify-between items-center w-full">
          <h3 className="color-bg">{title}</h3>
          <div className="tag">
            <p className="color-bg">{tag}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoSlide;