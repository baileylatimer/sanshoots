import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/axe/axe-sanshoots--3.jpg';
import Image2 from '../../images/axe/axe-sanshoots--9.jpg';
import Image3 from '../../images/axe/axe-sanshoots--10.jpg';
import Image4 from '../../images/axe/axe-sanshoots--7.jpg';
import Image5 from '../../images/axe/axe-sanshoots--5.jpg';
import Image6 from '../../images/axe/axe-sanshoots--15.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'A Visual Reflection on Purpose and Self-Discovery'
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
      text: 'Embrace Your Journey was shot in San Diego, featuring scenic cliffs and waterfront locations. The video carries a powerful message about self-discovery, reflecting on how each person has a unique purpose on Earth. It encourages viewers to embrace their journey, passions, and creative paths, stepping away from the constraints of societal systems.',
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
      text: 'Through visuals of natural beauty and a reflective tone, the video emphasizes the importance of tapping into your individuality and making an impact not only for yourself but for the world around you.',
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
      text: 'This project highlights Sanshoots\' ability to capture deeply motivational themes and blend them with stunning visuals. Embrace Your Journey serves as a reminder that personal growth and self-exploration are essential to changing the world.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990318504';
const projectTitle = 'Embrace Your Journey';
const pageTitle = 'Embrace Your Journey';
const projectInfo = [
  'San Diego, CA, USA',
  '32.8328° N, 117.2713° W'
];
const projectTag = 'Storytelling';


const nextProjectTitle = "Never Let You Fall";
const nextProjectUrl = "/shortfilms/never-let-you-fall";


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