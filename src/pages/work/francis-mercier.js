import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import { navigate } from 'gatsby';
import ElyannaImage from '../../images/elyanna-full.jpg';
import ElyannaClippedImage from '../../images/elyanna-clipped.jpg';

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
      image: ElyannaImage,
    },
  },
  {
    type: 'layout3',
    content: {
      heading: 'Telling Her Story',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
      image: ElyannaClippedImage,
    },
  },
  {
    type: 'nextProject',
    content: {
      nextProjectTitle: 'Next Project Title',
    },
  },
];

const videoUrl = 'https://vimeo.com/347119375';
const projectTitle = 'Elyanna';

const ProjectPageContainer = () => {
  useEffect(() => {
    document.body.classList.add('project-page');
    return () => {
      document.body.classList.remove('project-page');
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nextProjectElement = document.getElementById('next-project');
      if (nextProjectElement) {
        const rect = nextProjectElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          console.log('Navigating to next project...'); // Debug log
          navigate('/work/francis-mercier');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <ProjectPage videoUrl={videoUrl} projectDetails={projectDetails} projectTitle={projectTitle} />;
};

export default ProjectPageContainer;
