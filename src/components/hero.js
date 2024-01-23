import React, { useEffect } from "react";
import BackgroundVideo from "./bg-video"
import Video from "../videos/hero-vid.mp4"

import { gsap } from "gsap";
    

const Hero = props => (
  
<div class="hero">

<svg className="hero-reel mx-24 mt-36" width="1387" height="70" viewBox="0 0 1387 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="39.1366" height="69.4875" rx="10.3832" fill="#232323"/>
<rect x="122.533" width="39.1366" height="69.4875" rx="10.3832" fill="#232323"/>
<rect x="245.066" width="39.1366" height="69.4875" rx="10.3832" fill="#232323"/>
<rect x="367.599" width="39.1366" height="69.4875" rx="10.3832" fill="#232323"/>
<rect x="490.132" width="39.1366" height="69.4875" rx="10.3832" fill="#232323"/>
<rect x="612.665" width="39.1366" height="69.4875" rx="10.3832" fill="#232323"/>
<rect x="735.198" width="39.1366" height="69.4875" rx="10.3832" fill="#232323"/>
<rect x="857.731" width="39.1366" height="69.4875" rx="10.3832" fill="#232323"/>
<rect x="980.264" width="39.1366" height="69.4875" rx="10.3832" fill="#232323"/>
<rect x="1102.8" width="39.1366" height="69.4875" rx="10.3832" fill="#232323"/>
<rect x="1225.33" width="39.1366" height="69.4875" rx="10.3832" fill="#232323"/>
<rect x="1347.86" width="39.1366" height="69.4875" rx="10.3832" fill="#232323"/>
</svg>

<div className="overlay-bottom"></div>
<h1 className="text-xxl mt-36  ro">SANSHOOTS</h1>
<p className="hero-desc text-white ">Rocio Colomer Jorda has 15 years of dance experience. With influences from her home country of spain, she now teaches in San Diego, CA.</p>
</div>
 

);

// gsap.fromTo(".ro", {x: 285, y: 400},{ x: 0, y: 0, duration: 3, delay:1}); 
// gsap.fromTo(".cio", {x: -285, y: -400},{ x: 0, y: 0, duration: 3, delay:1});

// gsap.fromTo(".ro", {x: "+=20vw", y: "+=20vh"},{ x: 0, y: 0, duration: 3, delay:5}); 
// gsap.fromTo(".cio", {x: "-=20vw", y: "+=20vh"},{ x: 0, y: 0, duration: 3, delay:5});

// gsap.fromTo(".ro", {xPercent: 55, yPercent: 650},{ xPercent: 0, yPercent: 0, duration: 3, delay:1}); 
// gsap.fromTo(".cio", {xPercent: -55, yPercent: -630},{ xPercent: 0, yPercent: 0, duration: 3, delay:1});
 

   

 
export default Hero        