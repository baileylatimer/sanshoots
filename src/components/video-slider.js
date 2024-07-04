import React from "react";
import Slider from "react-slick";
import VideoSlide from './video-slide';  // Ensure the import path is correct
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <VideoSlide 
            videoSrc={slide.videoSrc}
            title={slide.title}
            tag={slide.tag}
            linkTo={slide.linkTo}
          />
        </div>
      ))}
    </Slider>
  );
};

export default VideoSlider;
