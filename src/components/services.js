import React, { useState, useRef, useEffect } from 'react';

const ServiceComponent = ({ services }) => {
  const [activeService, setActiveService] = useState(services[0]);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controls = false;
    }
  }, [activeService]);

  const handleVideoClick = (e) => {
    e.preventDefault();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="service-component relative lg:flex dark-theme px-d py-d justify-between">
      <div className="z-10 relative">
        <h5 className="color-bg mb-12 lg:mb-0">Services</h5>
        <div className="service-texts">
          {services.map((service) => (
            <div
              key={service.name}
              className={`service-text ${activeService.name === service.name ? 'active' : ''}`}
              onClick={() => setActiveService(service)}
            >
              {service.name}
            </div>
          ))}
        </div>
      </div>
      <div className='service-video-wrapper'>
        <div className="service-video">
          {activeService && (
            <>
              <video
                ref={videoRef}
                src={activeService.video}
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline="true"
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                className="service-video-element"
                onClick={handleVideoClick}
              />
              <div className="video-overlay"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;