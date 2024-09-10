import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const VideoSlide = ({ webmSrc, mp4Src, fallbackImageSrc, title, tag, linkTo, isVisible, isMobile }) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const iOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(iOS);

    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current && !isMobile) {
      videoRef.current.load();
    }
  }, [isVisible, isMobile]);

  const handleVideoLoaded = () => {
    console.log("Video loaded successfully");
    setIsVideoLoaded(true);
  };

  const handleVideoError = (e) => {
    console.error("Video loading error:", e);
    setHasVideoError(true);
  };

  const handleMouseEnter = () => {
    if (videoRef.current && !isIOS && !isMobile) {
      videoRef.current.play().catch(error => console.error("Autoplay failed:", error));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !isIOS && !isMobile) {
      videoRef.current.pause();
    }
  };

  const optimizedImage = getImage(fallbackImageSrc);

  return (
    <Link to={linkTo} className="video-slide pl-4">
      <div className="video-container">
        {optimizedImage && (
          <GatsbyImage
            image={optimizedImage}
            alt={title}
            className={`fallback-image ${(!isVisible || isMobile || !isVideoLoaded || hasVideoError) ? '' : 'hidden'}`}
          />
        )}
        {!isMobile && isVisible && (
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
            <source src={isIOS ? mp4Src : webmSrc} type={isIOS ? "video/mp4" : "video/webm"} />
            <source src={mp4Src} type="video/mp4" />
          </video>
        )}
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