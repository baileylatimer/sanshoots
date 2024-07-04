
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

  // useEffect(() => {
  //   // Ensure Draggable is registered
  //   gsap.registerPlugin(Draggable);

  //   // Apply Draggable to each VideoSVGMask component
  //   if (videoMasksRef.current) {
  //     const videoMasks = videoMasksRef.current.querySelectorAll('.video-svg-wrapper');
  //     videoMasks.forEach(mask => {
  //       Draggable.create(mask, {
  //         type: "x,y", // Makes the element draggable in both x and y directions
  //         bounds: videoMasksRef.current, // Optionally restricts dragging within the bounds of the parent container
  //       });
  //     });
  //   }
  // }, []);

  return (
    <div className="hero mb-16">
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
      <div className="flex px-2" ref={videoMasksRef}>
        <h1 className="text-xxl text-center">SANSH</h1>
        <VideoSVGMask videoSrc={SanEye} />
       <VideoSVGMask videoSrc={SanThrow} />
        <h1 className="text-xxl text-center">TS</h1>
      </div>
    </div>
  );
};

export default Hero;     




