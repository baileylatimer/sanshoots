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
      text: 'Yung Bans, a major influence in the hip-hop rap scene, brought his unique energy to a desert shoot that perfectly matched his distinct style. Working with Yung Bans was a thrilling experience, especially as a longtime fan from high school. This project involved shooting a music video for his new song "YSL" amidst the stark and evocative backdrop of train tracks in the desert.',
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

const videoUrl = 'https://vimeo.com/1006045937';
const projectTitle = 'Yung Bans';
const pageTitle = 'Yung Bans';
const projectInfo = [
  'California City, CA, USA',
  '35.1258° N, 117.9859° W'
];
const projectTag = 'Music Video';


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