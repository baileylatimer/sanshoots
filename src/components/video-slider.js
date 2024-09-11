


// src/components/video-slider.js

import React, { useEffect, useRef, useState } from "react";
import VideoSlide from './video-slide';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSlider = ({ slides }) => {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState([]);
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    const slidesPerView = isMobile ? 1 : 3;
    const totalSlides = slides.length;
    const totalSlidesToScroll = totalSlides - slidesPerView + 1;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSlides((prev) => [...new Set([...prev, Number(entry.target.dataset.index)])]);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    container.querySelectorAll('.slide-item').forEach((slide) => {
      observer.observe(slide);
    });

    const animation = gsap.to(container, {
      x: () => -(container.scrollWidth - wrapper.offsetWidth),
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "bottom bottom",
        end: () => `+=${(totalSlidesToScroll - 1) * wrapper.offsetWidth}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress * 100;
          setProgress(progress);
          const currentSlideIndex = Math.min(
            Math.floor(self.progress * totalSlidesToScroll) + 1,
            totalSlides
          ); 
          setCurrentSlide(currentSlideIndex);
        }
      }
    });

    return () => {
      animation.scrollTrigger.kill();
      observer.disconnect();
    };
  }, [slides.length, isMobile]);

  console.log("VideoSlider rendered. Slides:", slides);
  console.log("Is Mobile:", isMobile);

  return (
    <div className="video-slider-wrapper" ref={wrapperRef}>
      <div className="px-d">
        <h5>Selected Works</h5>
      </div>
      <div className="progress-container px-d">
        <div className="progress-bar mr-16">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="slide-count mr-d">{currentSlide}/{slides.length}</div>
      </div>
      <div className="video-slider-container" ref={containerRef}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-item" data-index={index}>
            <VideoSlide 
              key={`slide-${index}-${isMobile}`}
              {...slide} 
              isVisible={visibleSlides.includes(index)} 
              isMobile={isMobile} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;