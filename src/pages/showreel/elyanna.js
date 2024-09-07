import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';

import Image1 from '../../images/elyanna/elyanna-sanshoots--19.jpg';
import Image2 from '../../images/elyanna/elyanna-sanshoots--10.jpg';
import Image3 from '../../images/elyanna/elyanna-sanshoots--18.jpg';
import Image4 from '../../images/elyanna/elyanna-sanshoots--11.jpg';
import Image5 from '../../images/elyanna/elyanna-sanshoots--4.jpg';
import Image6 from '../../images/elyanna/elyanna-sanshoots--15.jpg';

import Elyanna from "../../videos/elyanna-2.mp4";
import NourArdakani from "../../videos/production.mp4";
import FrancisMercier from "../../videos/francis-mercier.mp4";

const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'Meet Elyanna',
        'a revolutionary Palestinian artist'
      ],
    },
  },
  {
    type: 'Image',
    content: {
      image: Image1,
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
        Image2,
        Image3,
        Image4,
        Image5,
      ],
    },
  },
  {
    type: 'Paragraph',
    content: {
      heading: 'Putting it together',
      text: 'Editing this project involved meticulous color grading to manage concert lighting, achieving a beautiful, cohesive look. Working with Elyanna and her team, especially her talented brother Feras, was an incredible experience. This recap showcases Sanshoots dedication to sharp imagery and engaging storytelling. Relive the magic of Elyannas LA tour—this is a visual experience you wont want to miss.',
    },
  },
  {
    type: 'Image',
    content: {
      image: Image6,
    },
  },
  {
    type: 'Paragraph',
    content: {
      heading: 'In conclusion',
      text: 'Sanshoots was honored to capture the highlight moments and energy of her show. Using the Sony A7Siii with a 24-70mm f/2.8 G Master lens and a Ronin stabilizer, we shot in 4K 4:2:2 10-bit at 120 FPS and 60 FPS, creating dynamic visuals. The brilliantly directed lighting and stage design by Elyanna\'s team provided the perfect backdrop.',
    },
  },
];

const videoUrl = 'https://vimeo.com/988666899';
const projectTitle = 'Elyanna';
const pageTitle = 'Elyanna';
const projectInfo = [
  'Santa Ana, CA, USA',
  '33.7455° N, 117.8677° W'
];
const projectTag = 'Event';

const sliderData = [
  {
    videoSrc: Elyanna,
    title: "Elyanna",
    tag: "Music",
    linkTo: "/showreel/elyanna"
  },
  {
    videoSrc: FrancisMercier,
    title: "Francis Mercier",
    tag: "Music",
    linkTo: "/showreel/francis-mercier"
  },
  {
    videoSrc: NourArdakani,
    title: "Nour Ardakani",
    tag: "Music",
    linkTo: "/showreel/nour-ardakani"
  }
];



const nextProjectTitle = "Yung Bans";
const nextProjectUrl = "/showreel/yung-bans";

const ProjectPageContainer = () => {
  useEffect(() => {
    document.body.classList.add('project-page');
    return () => {
      document.body.classList.remove('project-page');
    };
  }, []);

  return (
    <ProjectPage 
      videoUrl={videoUrl} 
      projectDetails={projectDetails} 
      projectTitle={projectTitle} 
      projectInfo={projectInfo}
      projectTag={projectTag}
      sliderData={sliderData}
      pageTitle={pageTitle}
      nextProjectTitle={nextProjectTitle}
      nextProjectUrl={nextProjectUrl}
    />
  );
};

export default ProjectPageContainer;