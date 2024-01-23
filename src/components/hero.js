import React, { useEffect } from "react";
import BackgroundVideo from "./bg-video"
import ReelBlock from "./reel-block"
import Logo from "./logo"
import Video from "../videos/hero-vid.mp4"

import { gsap } from "gsap";
    

const Hero = props => (
  
<div class="hero">

<div className="flex justify-between hero-reel mx-24 mt-36">
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


<div className=" ">
<h1 className="text-xxl text-center">SANSHOOTS</h1>
</div>

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