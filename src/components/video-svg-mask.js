import React from "react";


const VideoSVGMask = ({ videoSrc }) => {
  return (
    <div className="video-svg-wrapper">
      {/* Hidden SVG for Clipping Path */}


<svg className='svg-class' width="100%"  fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
      <clipPath id="clip-shape">
<path d="M97.5 499.5C67.1986 499.5 42.9314 494.358 26.2558 483.987C9.61252 473.637 0.5 458.061 0.5 437.059V62.9411C0.5 41.9386 9.61252 26.3633 26.2558 16.0128C42.9314 5.64204 67.1986 0.5 97.5 0.5C127.801 0.5 152.069 5.64204 168.744 16.0128C185.387 26.3633 194.5 41.9386 194.5 62.9411V437.059C194.5 458.061 185.387 473.637 168.744 483.987C152.069 494.358 127.801 499.5 97.5 499.5Z" />
</clipPath>
</defs>
</svg>




      {/* Video Element */}
      <video autoPlay loop muted className="video-class">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSVGMask;
