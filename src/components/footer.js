


import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
import Btn from "./btn";
import ReelVertical from "./reel-vertical";
import CoordinatesLA from "./coordinates-la";
import CoordinatesPalestine from "./coordinates-palestine";
import TextPalestine from "./text-palestine";
import FlagPalestine from "./flag-palestine";
import EmailArrow from "./email-arrow";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

// gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);


const PageHeader = props => {
  /*
  const footerRef = useRef(null);

  useEffect(() => {
    // Existing logic to scramble p and a tags
    gsap.utils.toArray("p:not(.btn *), a:not(.btn *)", footerRef.current).forEach(element => {
      ScrollTrigger.create({
        trigger: element,
        start: "top bottom",
        onEnter: () => scrambleText(element),
        onEnterBack: () => scrambleText(element),
      });
    });
  
    // Scramble text effect for the h2.header-title
    const headerTitle = footerRef.current.querySelector('.header-title');
    if (headerTitle) {
      ScrollTrigger.create({
        trigger: headerTitle,
        start: "top bottom",
        onEnter: () => scrambleText(headerTitle),
        onEnterBack: () => scrambleText(headerTitle),
      });
    }
  
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
  
  */
  

  return (
    <footer  className="flex flex-col px-d py-d relative">
      <div className="flex justify-between mb-16">
        <div className="flex flex-col">
          <h2 className="header-title">Lets f#ck it up </h2>
          <Btn link="/contact" text="Get in touch"/>
        </div> 
        <div className="reel-vertical-wrapper desktop"><ReelVertical /></div>
      </div>

      <div className="desktop">
        <div className="footer-text flex justify-start items-center">
          Los Angeles <CoordinatesLA /> Palestine <CoordinatesPalestine />
        </div>
        <div className="footer-text flex justify-start items-center">
        <TextPalestine /> <FlagPalestine /> Hassan <EmailArrow />sanshoots.com
        </div>
      </div>

      <div className="mobile">
        <div className="footer-text flex justify-start items-center">
          Los Angeles <CoordinatesLA /> 
        </div>
        <div className="footer-text flex justify-start items-center">
          <CoordinatesPalestine /> Palestine 
        </div>

        <div className="footer-text flex justify-between items-center mt-2 mb-4">
        <TextPalestine /> <FlagPalestine />
        </div>
        <div className="footer-text flex justify-start items-center">
       Hassan <EmailArrow />sanshoots.com
        </div>
      </div>
      
      <div className=" flex flex-col lg:flex-row justify-between  mt-16">
        <p>© 2024 / Sanshoots</p>
    

          <p className="mt-4 lg:mt-0">Load Address: 034526-01, IScxx compressed</p>
      
        <div className="flex footer-links flex mt-4 lg:mt-0">
          <a href="https://www.instagram.com/sanshoots/">Instagram</a>
          <a className="ml-2 lg:ml-4" href="https://www.tiktok.com/@sanshootsx">TikTok</a>
          <a className="ml-2 lg:ml-4" href="https://www.youtube.com/channel/UCR3Odsrgz2rVw_JoYkQnepA">YouTube</a>
          <a className="ml-2 lg:ml-4" href="https://www.linkedin.com/in/hassan-musa-56bb14172/">LinkedIn</a>
          <a className="ml-2 lg:ml-4" href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default PageHeader;
