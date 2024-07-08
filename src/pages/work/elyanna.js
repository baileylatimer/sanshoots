



import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';

const projectDetails = [
  'Project Detail 1',
  'Project Detail 2',
  'Project Detail 3',
  // Add more details as needed
];

const videoUrl = 'https://vimeo.com/347119375';

const ProjectPageContainer = () => {
  useEffect(() => {
    document.body.classList.add('project-page');
    return () => {
      document.body.classList.remove('project-page');
    };
  }, []);

  return <ProjectPage videoUrl={videoUrl} projectDetails={projectDetails} />;
};

export default ProjectPageContainer;
