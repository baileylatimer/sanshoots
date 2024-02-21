


import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Btn from "./btn";
import ReelVertical from "./reel-vertical";
import CoordinatesLA from "./coordinates-la";
import CoordinatesPalestine from "./coordinates-palestine";
import TextPalestine from "./text-palestine";
import FlagPalestine from "./flag-palestine";
import EmailArrow from "./email-arrow";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const PageHeader = props => {
  const footerRef = useRef(null);

  useEffect(() => {
    // This selector targets all <p> and <a> tags but excludes those with the 'btn' class
    gsap.utils.toArray("p:not(.btn), a:not(.btn)", footerRef.current).forEach(element => {
      ScrollTrigger.create({
        trigger: element,
        start: "top bottom",
        onEnter: () => scrambleText(element),
        onEnterBack: () => scrambleText(element) // If you want the animation when scrolling back up
      });
    });
  
    function scrambleText(target) {
      gsap.to(target, {
        duration: 1.5,
        scrambleText: {
          text: target.textContent,
          chars: "upperCase",
          revealDelay: 1.5,
          newClass: "scramble"
        }
      });
    }
  }, []);
  

  return (
    <footer ref={footerRef} className="flex flex-col px-d py-d relative">
      <div className="flex justify-between mb-16">
        <div className="flex flex-col">
          <h2>Lets f#ck it up </h2>
          <Btn link="/contact" text="Get in touch"/>
        </div> 
        <div className="reel-vertical-wrapper"><ReelVertical /></div>
      </div>

      <div className="footer-text flex justify-start items-center">
        Los Angeles <CoordinatesLA /> Palestine <CoordinatesPalestine />
      </div>
      <div className="footer-text flex justify-start items-center">
       <TextPalestine /> <FlagPalestine /> Hassan <EmailArrow />sanshoots.com
      </div>
      
      <div className=" flex justify-between mx-d mt-16">
        <p>© 2024 / Sanshoots</p>
    

          <p>Load Address: 034526-01, IScxx compressed</p>
      
        <div className="flex footer-links flex">
          <a href="https://www.instagram.com/sanshoots/">Instagram</a>
          <a className="ml-4" href="https://www.tiktok.com/@sanshootsx">TikTok</a>
          <a className="ml-4" href="https://www.youtube.com/channel/UCR3Odsrgz2rVw_JoYkQnepA">YouTube</a>
          <a className="ml-4" href="https://www.linkedin.com/in/hassan-musa-56bb14172/">LinkedIn</a>
          <a className="ml-4" href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default PageHeader;
