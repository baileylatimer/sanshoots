import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/tesla-cybertruck/tesla-cybertruck-sanshoots--1.jpg';
import Image2 from '../../images/tesla-cybertruck/tesla-cybertruck-sanshoots--2.jpg';
import Image3 from '../../images/tesla-cybertruck/tesla-cybertruck-sanshoots--3.jpg';
import Image4 from '../../images/tesla-cybertruck/tesla-cybertruck-sanshoots--4.jpg';
import Image5 from '../../images/tesla-cybertruck/tesla-cybertruck-sanshoots--5.jpg';
import Image6 from '../../images/tesla-cybertruck/tesla-cybertruck-sanshoots--6.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'Tesla Cybertruck Unleashed in the Heart of San Diego'
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
      heading: 'Telling the story',
      text: 'This spontaneous Tesla Cybertruck shoot took place in downtown San Diego, capturing the car\'s futuristic design in various locations. We shot at a garage, by the harbor for city views, and through tunnels, creating a visually dynamic backdrop as the day transitioned from sunset to night.',
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
      text: 'The project came together quickly after I met the car’s owner, Alex, in Pacific Beach. He was excited to collaborate, and we completed the shoot in just 1-2 hours. My goal was to create a mini commercial, showcasing the Cybertruck’s sleek design in urban settings. The results turned out amazing, proving that some of the best projects come from spontaneous moments and quick creativity.',
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
      text: 'This project highlights Sanshoots\' ability to produce high-quality cinematic visuals in a short timeframe, making it a standout video that captures the essence of the Tesla Cybertruck in an urban setting.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990314754';
const projectTitle = 'Tesla Cybertruck';
const pageTitle = 'Tesla Cybertruck';
const projectInfo = [
  'Pacific Beach, CA, USA',
  '32.8025° N, 117.2356° W'
];
const projectTag = 'Auto';


const nextProjectTitle = "Life is Good";
const nextProjectUrl = "/shortfilms/life-is-good";


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