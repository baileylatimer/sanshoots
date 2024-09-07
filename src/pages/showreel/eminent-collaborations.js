import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/eminent-collaborations/eminent-collaborations-sanshoots--1.jpg';
import Image2 from '../../images/eminent-collaborations/eminent-collaborations-sanshoots--2.jpg';
import Image3 from '../../images/eminent-collaborations/eminent-collaborations-sanshoots--3.jpg';
import Image4 from '../../images/eminent-collaborations/eminent-collaborations-sanshoots--4.jpg';
import Image5 from '../../images/eminent-collaborations/eminent-collaborations-sanshoots--5.jpg';
import Image6 from '../../images/eminent-collaborations/eminent-collaborations-sanshoots--6.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'Connecting Through Nature, A Costa Rican Adventure'
      ],
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
      heading: 'Telling the story',
      text: 'Eminent Collaborations excels in giving, service, and unique experiences that uplift the Long Beach community through artistic expression. Working with Shane, the founder, felt like connecting with an old friend. He reached out for a retreat in Costa Rica, and within an hour of our call, we had a deal. The next day, I was in Costa Rica, capturing the essence of their nine-day company retreat.',
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
      text: 'The retreat took place in a breathtaking landscape, surrounded by nature\'s beauty. Using the Sony A7Siii with a 24-70mm f/2.8 G Master lens and a gimbal, I documented the behind-the-scenes moments and the serene atmosphere of the retreat. ',
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
      text: 'The experience was not just about filming but also exploring the country with Shane, making it a memorable adventure. This project highlights Sanshoots\' ability to quickly adapt and produce high-quality, engaging content in any setting.',
    },
  },
];

const videoUrl = 'https://vimeo.com/988710334';
const projectTitle = 'Eminent Collaborations';
const pageTitle = 'Eminent Collaborations';
const projectInfo = [
  'Monteverde, Costa Rica',
  '10.2973° N, 84.8255° W'
];
const projectTag = 'NGO';


const nextProjectTitle = "El Silencio Glamping";
const nextProjectUrl = "/showreel/el-silencio-glamping";


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