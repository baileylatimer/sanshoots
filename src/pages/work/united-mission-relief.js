import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';

import Image1 from '../../images/united-mission-relief/united-mission-relief-sanshoots--12.jpg';
import Image2 from '../../images/united-mission-relief/united-mission-relief-sanshoots--3.jpg';
import Image3 from '../../images/united-mission-relief/united-mission-relief-sanshoots--7.jpg';
import Image4 from '../../images/united-mission-relief/united-mission-relief-sanshoots--4.jpg';
import Image5 from '../../images/united-mission-relief/united-mission-relief-sanshoots--5.jpg';
import Image6 from '../../images/united-mission-relief/united-mission-relief-sanshoots--6.jpg';

import Image7 from '../../images/united-mission-relief/united-mission-relief-sanshoots--7.jpg';
import Image8 from '../../images/united-mission-relief/united-mission-relief-sanshoots--8.jpg';
import Image9 from '../../images/united-mission-relief/united-mission-relief-sanshoots--9.jpg';
import Image10 from '../../images/united-mission-relief/united-mission-relief-sanshoots--10.jpg';
import Image11 from '../../images/united-mission-relief/united-mission-relief-sanshoots--11.jpg';
import Image12 from '../../images/united-mission-relief/united-mission-relief-sanshoots--1.jpg';


import NourArdakani from "../../videos/production.mp4";
import FrancisMercier from "../../videos/francis-mercier.mp4";

const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'Humanity in Motion, UMR\'s Marrakesh Relief Effort'
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
      heading: 'Telling The Story',
      text: 'United Mission Relief (UMR) is dedicated to providing emergency relief and development assistance to communities in need worldwide. In September 2023, I joined Habib and Jae Deen on a mission to Marrakesh, Morocco, to document our efforts following a devastating earthquake.',
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
      text: 'This project involved capturing the behind-the-scenes process of our team packing and distributing food and aid. The atmosphere was both challenging and inspiring, highlighting the collective dedication to helping those in need. Using my Sony A7Siii with a 24-70mm f/2.8 G Master lens and a gimbal, I was able to capture dynamic and flexible shots over seven days.',
    },
  },
  {
    type: 'Image',
    content: {
      image: Image6,
    },
  },
  {
    type: 'Gallery',
    content: {
      images: [
        Image7,
        Image8,
        Image9,
        Image10,
      ],
    },
  },
  {
    type: 'Image',
    content: {
      image: Image11,
    },
  },
  {
    type: 'Paragraph',
    content: {
      heading: 'In conclusion',
      text: 'The result was a 30-minute documentary showcasing our journey and the impact of our efforts. Working with the UMR team was an incredible experience, allowing me to connect deeply with the locals and document their resilience. This project underscores Sanshoots\' ability to produce powerful, empathetic storytelling.',
    },
  },
];

const videoUrl = 'https://vimeo.com/1006409426';
const projectTitle = 'United Mission Relief';
const pageTitle = 'United Mission Relief';
const projectInfo = [
  'Marrakesh, Morocco',
  '31.6225° N, 7.9898° W'
];
const projectTag = 'NGO';



const nextProjectTitle = "Intuitive Foundation";
const nextProjectUrl = "Intuitive Foundation";

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
      pageTitle={pageTitle}
      nextProjectTitle={nextProjectTitle}
      nextProjectUrl={nextProjectUrl}
    />
  );
};

export default ProjectPageContainer;