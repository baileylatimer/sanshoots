import React, { useState } from 'react';


const ServiceComponent = ({ services }) => {
  // Initialize the state with the first service's video
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="service-component relative lg:flex dark-theme px-d py-d justify-between">
      <div>
      <h5 class="color-bg mb-12 lg:mb-0 z-10 relative">Services</h5>
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
    </div>
  );
};

export default ServiceComponent;
