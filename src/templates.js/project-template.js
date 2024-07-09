import React from 'react';
import ProjectPage from '../components/project-page';

const ProjectTemplate = ({ pageContext }) => {
  const { videoUrl, projectDetails, projectTitle } = pageContext;

  return <ProjectPage videoUrl={videoUrl} projectDetails={projectDetails} projectTitle={projectTitle} />;
};

export default ProjectTemplate;
