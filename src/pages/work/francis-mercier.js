import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/francis-mercier/francis-mercier-sanshoots--23.jpg';
import Image2 from '../../images/francis-mercier/francis-mercier-sanshoots--17.jpg';
import Image3 from '../../images/francis-mercier/francis-mercier-sanshoots--13.jpg';
import Image4 from '../../images/francis-mercier/francis-mercier-sanshoots--10.jpg';
import Image5 from '../../images/francis-mercier/francis-mercier-sanshoots--4.jpg';
import Image6 from '../../images/francis-mercier/francis-mercier-sanshoots--5.jpg';

import NourArdakani from "../../videos/production.mp4";
import Paliroots from "../../videos/production.mp4";

const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'Francis Mercier\'s',
        'Afro set breaks the dance floor in Chinatown'
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
      heading: 'Telling his story',
      text: 'Francis Mercier\'s performance in Los Angeles\' Chinatown was nothing short of electrifying. His unique blend of Afro House beats and seamless transitions kept the crowd dancing non-stop, creating an unforgettable atmosphere. Capturing this energy on film was an incredible experience.',
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
      text: 'For this shoot, I used the Sony A7Siii at 60 FPS, incorporating a mix of handheld movements and gimbal shots for smooth motion. One unique element of this project was integrating 360 camera moments, adding a dynamic layer to the final edit. Navigating through the packed venue was challenging, but finding the perfect spots to set up allowed for exceptional footage of the performance. The editing process involved creative techniques to manage the intense lighting, using camera transitions to enhance the visual flow.',
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
      text: 'The result is a high-energy recap that truly captures the essence of Francis Mercier\'s LA show. Working with his team, including his tour manager Oscar, was a fantastic experience, and we\'re excited for future collaborations. The beats, relive the magic of this unforgettable night.',
    },
  },
];

const videoUrl = 'https://vimeo.com/988678508';
const projectTitle = 'Francis Mercier';
const pageTitle = 'Francis Mercier';
const projectInfo = [
  'Chinatown, Los Angeles, USA',
  '34.0616° N, 118.2363° W'
];
const projectTag = 'Event';


const nextProjectTitle = "Yung Bans";
const nextProjectUrl = "/work/yung-bans";

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