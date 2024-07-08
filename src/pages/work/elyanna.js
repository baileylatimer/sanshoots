import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import ElyannaFull from '../../images/elyanna-full.jpg';
import ElyannaClipped from '../../images/elyanna-clipped.jpg';

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

const videoUrl = 'https://vimeo.com/347119375';
const projectTitle = 'Elyanna'; // Add your project title here

const ProjectPageContainer = () => {
  useEffect(() => {
    document.body.classList.add('project-page');
    return () => {
      document.body.classList.remove('project-page');
    };
  }, []);

  return <ProjectPage videoUrl={videoUrl} projectDetails={projectDetails} projectTitle={projectTitle} />;
};

export default ProjectPageContainer;
