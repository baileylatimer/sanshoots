import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/intuitive-foundation/intuitive-foundation-sanshoots--1.jpg';
import Image2 from '../../images/intuitive-foundation/intuitive-foundation-sanshoots--2.jpg';
import Image3 from '../../images/intuitive-foundation/intuitive-foundation-sanshoots--3.jpg';
import Image4 from '../../images/intuitive-foundation/intuitive-foundation-sanshoots--4.jpg';
import Image5 from '../../images/intuitive-foundation/intuitive-foundation-sanshoots--5.jpg';
import Image6 from '../../images/intuitive-foundation/intuitive-foundation-sanshoots--6.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'Colombian Retreat, A Journey to Self-Exploration'
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
      text: 'Intuitive Foundation is dedicated to creating positive change through community-driven initiatives. Their programs foster innovation and empower individuals and non-profits. I was connected with Ivana, who invited me to document their "Heroes Journey Retreat," a five-day event focused on self-reflection and personal connection, held in the beautiful town of Salento, Pereira, Colombia.',
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
      text: 'The retreat included a group of 30 people engaging in various activities designed to deepen their self-awareness. Using the Sony A7Siii with a 24-70mm f/2.8 G Master lens and a Ronin gimbal, I captured the essence of the retreat, highlighting the stunning Colombian landscapes and the transformative experiences of the participants.',
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
      text: 'One memorable challenge was getting lost in a forest during a hike, which involved crossing a river. Despite this, the adventure added to the unique experience of the shoot. Working with Ivana and the Intuitive Foundation team was incredible, making this project a truly unforgettable journey. This project showcases Sanshoots\' ability to produce engaging and heartfelt content, reflecting the mission and impact of the Intuitive Foundation.',
    },
  },
];

const videoUrl = 'https://vimeo.com/988713944';
const projectTitle = 'Eminent Collaborations';
const pageTitle = 'Eminent Collaborations';
const projectInfo = [
  'Salento Pereira, Colombia',
  '4.6374° N, 75.5703° W'
];
const projectTag = 'Retreat';


const nextProjectTitle = "Eminent Collaborations";
const nextProjectUrl = "/work/eminent-collaborations";


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