import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import VideoSlide from './video-slide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = ({ slides }) => {
  const sliderRef = useRef(null);
  const [isHorizontalScroll, setIsHorizontalScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (!sliderRef.current) return;

      const slider = sliderRef.current.innerSlider.list;
      const sliderRect = slider.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (isHorizontalScroll) {
        const deltaY = e.deltaY;
        slider.scrollLeft += deltaY;

        // Prevent vertical scroll when horizontal scrolling
        if (slider.scrollLeft > 0 && slider.scrollLeft < slider.scrollWidth - slider.clientWidth) {
          e.preventDefault();
        }

        // Check if horizontal scroll reached the end
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          setIsHorizontalScroll(false);
          setScrollPosition(window.scrollY);
        }

        // Check if horizontal scroll is at the start
        if (slider.scrollLeft <= 0) {
          setIsHorizontalScroll(false);
        }
      } else {
        // Check if bottom of the slider is within the viewport
        if (sliderRect.bottom <= viewportHeight + 16) {
          setIsHorizontalScroll(true);
          setScrollPosition(window.scrollY);
          e.preventDefault();
        }
      }
    };

    const handleScrollBar = () => {
      if (!sliderRef.current) return;

      const slider = sliderRef.current.innerSlider.list;
      const sliderRect = slider.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if bottom of the slider is within the viewport
      if (sliderRect.bottom <= viewportHeight + 16 && !isHorizontalScroll) {
        setIsHorizontalScroll(true);
        setScrollPosition(window.scrollY);
      } else if (isHorizontalScroll) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollDelta = scrollTop - scrollPosition;
        slider.scrollLeft += scrollDelta;
        setScrollPosition(scrollTop);

        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth || slider.scrollLeft <= 0) {
          setIsHorizontalScroll(false);
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("scroll", handleScrollBar);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("scroll", handleScrollBar);
    };
  }, [isHorizontalScroll, scrollPosition]);

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index}>
            <VideoSlide {...slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
