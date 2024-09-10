import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/chaos-to-calm/chaos-to-calm-sanshoots--1.jpg';
import Image2 from '../../images/chaos-to-calm/chaos-to-calm-sanshoots--2.jpg';
import Image3 from '../../images/chaos-to-calm/chaos-to-calm-sanshoots--3.jpg';
import Image4 from '../../images/chaos-to-calm/chaos-to-calm-sanshoots--4.jpg';
import Image5 from '../../images/chaos-to-calm/chaos-to-calm-sanshoots--5.jpg';
import Image6 from '../../images/chaos-to-calm/chaos-to-calm-sanshoots--6.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'A Passage from Stress to Serenity'
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
      text: 'Calm to Chaos is a short film that contrasts a stressful working environment with a serene escape to a mountaintop, highlighting the journey from chaos to peace. Shot with Lydia, the project was spontaneously planned and executed in the same day, showcasing how quickly a meaningful concept can come to life.',
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
      text: 'This project symbolizes how the energy you put into life reflects the outcomes you experience. Through the ups and downs, taking time to reflect, escape, and reconnect with faith is essential for growth. The piece carries deep meaning, emphasizing the importance of balancing chaos with calm.',
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
      text: 'Sanshoots captured the essence of this powerful message through visually striking contrasts and thoughtful storytelling. Calm to Chaos serves as a reminder to pause, reflect, and find peace amid life\'s challenges—a project that resonates deeply with its audience.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990388937';
const projectTitle = 'Chaos to Calm';
const pageTitle = 'Chaos to Calm';
const projectInfo = [
  'Mulholland, CA, USA',
  '34.1826° N, 118.4397° W'
];
const projectTag = 'Shortfilm';


const nextProjectTitle = "Tesla Cybertruck";
const nextProjectUrl = "/shortfilms/tesla-cybertruck";


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