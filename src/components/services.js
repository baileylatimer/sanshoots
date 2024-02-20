import React, { useState } from 'react';


const ServiceComponent = ({ services }) => {
  // Initialize the state with the first service's video
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="service-component">
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
      <div className="service-video">
        {activeService && (
          <video
            src={activeService.video}
            autoPlay
            muted
            loop
            className="service-video-element"
          />
        )}
      </div>
    </div>
  );
};

export default ServiceComponent;
