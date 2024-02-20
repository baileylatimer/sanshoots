// src/components/Carousel.js
import React, { useEffect, useRef } from 'react';


const Carousel = ({ children }) => {
  const carouselContainer = useRef(null);

  useEffect(() => {
    let angle = 0;
    const interval = setInterval(() => {
      if (carouselContainer.current) {
        angle += 45; // Adjust rotation angle per step
        const items = carouselContainer.current.childNodes;

        items.forEach(item => {
          item.style.transform = `rotateY(${angle}deg) translateZ(250px)`; // Adjust for your 3D effect
        });
      }
    }, 2000); // Rotate every 2 seconds; adjust as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={carouselContainer} className="carousel-container">
      {children}
    </div>
  );
};

export default Carousel;
