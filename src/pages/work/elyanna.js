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
    type: 'layout1',
    content: {
      heading: 'Meet Elyanna, A Revolutionary Palestinian Artist.',
    },
  },
  {
    type: 'layout2',
    content: {
      image: ElyannaFull,
    },
  },
  {
    type: 'layout3',
    content: {
      heading: 'Telling Her Story',
      text: 'Elian Marjieh, known professionally as Elyanna, is a Palestinian-Chilean singer-songwriter, merging Arabic music with Latin rhythms to create an experimental Arab-pop sound that has captured a global audience. Born in Nazareth, her musical talents were nurtured by her family, with early influences including iconic figures like Julio Iglesias and Sabah Fakhri, Elyannas career took a significant turn when she was discovered at age 15 by Grammy-winner Nasri Atweh.',
      image: ElyannaClipped,
    },
  },
  // Add more details as needed
];

const videoUrl = 'https://vimeo.com/988666899';
const projectTitle = 'Elyanna'; // Add your project title here

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

  return <ProjectPage videoUrl={videoUrl} projectDetails={projectDetails} projectTitle={projectTitle} sliderData={sliderData} />;
};

export default ProjectPageContainer;
