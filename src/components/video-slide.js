import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const VideoSlide = ({ videoSrc, fallbackImageSrc, title, tag, linkTo, isVisible, isMobile }) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
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

  const getEncodedVideoPath = (src, format) => {
    const parts = src.split('/');
    const filename = parts.pop().split('.')[0];
    return `/static/videos/${filename}_encoded.${format}`;
  };

  const encodedMp4Src = getEncodedVideoPath(videoSrc, 'mp4');
  const encodedWebmSrc = getEncodedVideoPath(videoSrc, 'webm');

  // ... rest of the component logic (handleVideoLoaded, handleVideoError, etc.) ...

  return (
    <Link to={linkTo} className="video-slide pl-4">
      <div className="video-container">
        <GatsbyImage
          image={getImage(fallbackImageSrc)}
          alt={title}
          className={`fallback-image ${isVideoLoaded && !hasVideoError && !isMobile ? 'hidden' : ''}`}
        />
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
            <source src={isIOS ? encodedMp4Src : encodedWebmSrc} type={isIOS ? "video/mp4" : "video/webm"} />
            <source src={encodedMp4Src} type="video/mp4" />
            <source src={videoSrc} type="video/mp4" /> {/* Fallback to original */}
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