import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import ElyannaFull from '../../images/elyanna-full.jpg';
import ElyannaClipped from '../../images/elyanna-clipped.jpg';

import Elyanna from "../../videos/elyanna-2.mp4";
import NourArdakani from "../../videos/production.mp4";
import FrancisMercier from "../../videos/francis-mercier.mp4";
import Paliroots from "../../videos/production.mp4";
import Bluemoon from "../../videos/san-eye.mp4";
import Axe from "../../videos/san-sand-1.mp4";
import Gillette from "../../videos/san-sand-1.mp4";
import Celsius from "../../videos/san-sand-1.mp4";
import HighEndExotics from "../../videos/san-sand-1.mp4";
import Thg from "../../videos/san-sand-1.mp4";
import Umr from "../../videos/san-sand-1.mp4";
import IntuitiveFoundation from "../../videos/san-sand-1.mp4";
import EminentCollaborations from "../../videos/san-sand-1.mp4";
import ColombiaAirbnb from "../../videos/san-sand-1.mp4";
import WaheebNasan from "../../videos/san-sand-1.mp4";

const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: 'Elyanna’s 2024 Los Angeles Tour: A Cinematic Recap by Sanshoots',
    },
  },
  {
    type: 'Image',
    content: {
      image: ElyannaFull,
    },
  },
  {
    type: 'Paragraph',
    content: {
      heading: 'Telling Her Story',
      text: 'Elyanna, a Palestinian artist, blends traditional Arabic music with contemporary pop in her dynamic performances. Her 2024 Los Angeles tour was a visual and auditory feast, with stunning stage sets capturing the essence of her music.',
    },
  },

  {
    type: 'Gallery',
    content: {
      images: [
        ElyannaClipped,
        ElyannaFull,
        ElyannaClipped,
        ElyannaFull,
      ],
    },
  },

  {
    type: 'Paragraph',
    content: {
      heading: 'Putting it together',
      text: 'Sanshoots was honored to capture the highlight moments and energy of her show. Using the Sony A7Siii with a 24-70mm f/2.8 G Master lens and a Ronin stabilizer, we shot in 4K 4:2:2 10-bit at 120 FPS and 60 FPS, creating dynamic visuals. The brilliantly directed lighting and stage design by Elyanna’s team provided the perfect backdrop.',
    },
  },

  
  // Add more details as needed
];

const videoUrl = 'https://vimeo.com/506282451';
const projectTitle = 'Elyanna'; // Add your project title here
const pageTitle = 'Elyanna';


const sliderData = [
  {
    videoSrc: Elyanna,
    title: "Elyanna",
    tag: "Music",
    linkTo: "/work/elyanna"
  },
  {
    videoSrc: FrancisMercier,
    title: "Francis Mercier",
    tag: "Music",
    linkTo: "/work/francis-mercier"
  },
  {
    videoSrc: NourArdakani,
    title: "Nour Ardakani",
    tag: "Music",
    linkTo: "/work/nour-ardakani"
  },
  {
    videoSrc: Paliroots,
    title: "Paliroots",
    tag: "Fashion",
    linkTo: "/work/paliroots"
  },
  // Add more video data as needed
];

const ProjectPageContainer = () => {
  useEffect(() => {
    document.body.classList.add('project-page');
    return () => {
      document.body.classList.remove('project-page');
    };
  }, []);

  return <ProjectPage videoUrl={videoUrl} projectDetails={projectDetails} projectTitle={projectTitle} sliderData={sliderData} pageTitle={pageTitle} />;
};

export default ProjectPageContainer;
