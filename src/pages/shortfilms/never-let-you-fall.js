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
        'An Oath of Resilience and Protection for Palestine'
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
      text: 'Never Let You Fall was shot in the Imperial Sand Dunes, California, and begins with a powerful voiceover declaring, "I will never let you fall, oh Palestine." The video transitions into a visually striking cinematic sequence set to an iconic Hans Zimmer track, evoking a rush of emotions and a sense of fierce protection for the homeland.',
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
      text: 'The deep, dramatic tones of the color grade were carefully crafted to enhance the emotional impact of the video. This project stands as a highly rewatchable cinematic piece, combining powerful storytelling with immersive visuals.',
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
      text: 'This project highlights Sanshoots\' ability to evoke deep emotions through cinematic storytelling, delivering a powerful message of resilience and protection. Never Let You Fall is a captivating and emotionally charged visual experience.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990316601';
const projectTitle = 'Never Let You Fall';
const pageTitle = 'Never Let You Fall';
const projectInfo = [
  'Imperial Sand Dunes, CA, USA',
  '32.9581° N, 115.1430° W'
];
const projectTag = 'Cinematic';


const nextProjectTitle = "Palestine Activated";
const nextProjectUrl = "/shortfilms/palestine-activated";


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