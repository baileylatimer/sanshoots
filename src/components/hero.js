
import React, { useEffect, useRef } from "react";
import ReelBlock from "./reel-block"
import VideoSVGMask from "./video-svg-mask"
import SanEye from "../videos/san-eye.mp4"
import SanThrow from "../videos/san-throw.mp4"

import { gsap } from "gsap";


// Import other dependencies

const Hero = props => {
  // Using a ref to target the container of the VideoSVGMask components
  const videoMasksRef = useRef(null);


  return (
    <div className="hero mb-0 lg:mb-16">
      <div className=" desktop">
      <div className="flex justify-between hero-reel lg:mx-24 lg:mt-36">
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
      <div className="mobile">
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
      <div className="hero-text-container">
        <span className="hero-text">SANSH</span>
        <VideoSVGMask videoSrc={SanEye} />
        <VideoSVGMask videoSrc={SanThrow} />
        <span className="hero-text">TS</span>
      </div>
    </div>
  );
};

export default Hero;     




