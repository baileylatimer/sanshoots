
import React, { useEffect, useRef } from "react";
import ReelBlock from "./reel-block"
import VideoSVGMask from "./video-svg-mask"
import EyeLeft from "../videos/eye-left-5.mp4"
import EyeRight from "../videos/eye-right-6.mp4"

import { gsap } from "gsap";


// Import other dependencies

const Hero = props => {
  // Using a ref to target the container of the VideoSVGMask components
  const videoMasksRef = useRef(null);


  return (
    <div className="hero mb-0 lg:mb-16">
      <div className=" desktop bars">
      <div className="flex justify-between hero-reel px-d lg:mt-36">
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
      </div>
      </div>
      <div className="mobile px-d">
      <div className="flex justify-between hero-reel mt-24 ">
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
      </div>
      </div>
      <div className="hero-text-container px-d">
        <span data-text="SANSH" className="hero-text old-movie-text">SANSH</span>
        <VideoSVGMask videoSrc={EyeLeft} />
        <VideoSVGMask videoSrc={EyeRight} />
        <span data-text="TS" className="hero-text old-movie-text">TS</span>
      </div>
      <div className=" desktop bars bars-2">
      <div className="flex justify-between hero-reel px-d  hero-reel-2">
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
      </div>
      </div>
      <div className="mobile px-d bars-2">
      <div className="flex justify-between hero-reel bars bars-2 ">
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
        <ReelBlock />
      </div>
      </div>
    </div>
  );
};

export default Hero;     




