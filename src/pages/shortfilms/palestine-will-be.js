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
        'Battling the Sands of Time with Grit and Vision'
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
      text: 'Palestine Will Be was fully shot in the Imperial Sand Dunes, inspired by the visual style of the movie Dune while incorporating elements of Palestinian identity. The concept revolves around waking up to find my land being colonized, symbolizing resistance as an indigenous man defending his homeland.',
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
      text: 'The shoot was an intense experience, with me and my friend Tanner facing 60+ mph sandstorms to create a chaotic atmosphere that perfectly mirrored the story. The warm, stylized color grade further amplified the cinematic vibe and depth of the video.',
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
      text: 'This project is one for the books—every time I watch it, it gives me chills. Palestine Will Be stands as a powerful representation of resistance and identity, highlighting Sanshoots\' ability to bring intense emotion and visual storytelling to life.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990315980';
const projectTitle = 'Palestine Will Be';
const pageTitle = 'Palestine Will Be';
const projectInfo = [
  'Imperial Sand Dunes, CA, USA',
  '32.9581° N, 115.1430° W'
];
const projectTag = 'Cinematic';


const nextProjectTitle = "Chaos to Calm";
const nextProjectUrl = "/shortfilms/chaos-to-calm";


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