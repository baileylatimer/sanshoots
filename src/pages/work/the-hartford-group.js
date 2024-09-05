import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';

import Image1 from '../../images/the-hartford-group/the-hartford-group-sanshoots--5.jpg';
import Image2 from '../../images/the-hartford-group/the-hartford-group-sanshoots--12.jpg';
import Image3 from '../../images/the-hartford-group/the-hartford-group-sanshoots--10.jpg';
import Image4 from '../../images/the-hartford-group/the-hartford-group-sanshoots--26.jpg';
import Image5 from '../../images/the-hartford-group/the-hartford-group-sanshoots--22.jpg';




const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'Timeless Delivery,',
        'The Hartford Group\'s Rolls Royce Experience'
      ],
    },
  },
  {
    type: 'Reel',
    content: {
      reelUrl: 'https://vimeo.com/988709851',
    },
  },
  {
    type: 'Paragraph',
    content: {
      heading: 'Telling their story',
      text: 'The Hartford Group is dedicated to delivering unparalleled logistics, relocation, and transportation solutions across various industries, including hospitality and events. Their commitment to excellence, integrity, and customer satisfaction makes them a preferred partner worldwide.',
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
      text: 'For this shoot, we captured a Rolls Royce delivery to a private client in downtown LA. Timothy, the mastermind behind the operation, had everything perfectly arranged. Using the Sony A7Siii with a 24-70mm f/2.8 G Master lens, we documented the behind-the-scenes process of preparing and delivering the car, highlighting the professionalism and efficiency of The Hartford Group.',
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
      heading: 'In conclusion',
      text: 'Working with Timothy and The Hartford Group was an incredible experience, showcasing quick moves and seamless operations around LA. This project demonstrates Sanshoots\' ability to produce high-quality, engaging content that reflects the excellence of The Hartford Group.',
    },
  },
];

const videoUrl = 'https://vimeo.com/988709139';
const projectTitle = 'The Hartford Group';
const pageTitle = 'The Hartford Group';
const projectInfo = [
  'Calabasas, CA, USA',
  '34.1540° N, 118.6474° W'
];
const projectTag = 'Auto';


const nextProjectTitle = "UMR Relief";
const nextProjectUrl = "/work/umr-relief";


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