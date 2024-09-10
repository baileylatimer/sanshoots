import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/palestine-activated/palestine-activated-sanshoots--1.jpg';
import Image2 from '../../images/palestine-activated/palestine-activated-sanshoots--2.jpg';
import Image3 from '../../images/palestine-activated/palestine-activated-sanshoots--3.jpg';
import Image4 from '../../images/palestine-activated/palestine-activated-sanshoots--4.jpg';
import Image5 from '../../images/palestine-activated/palestine-activated-sanshoots--5.jpg';
import Image6 from '../../images/palestine-activated/palestine-activated-sanshoots--6.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'A Exploration of Identity and Resilience'
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
      text: 'The Palestine-Activated video is a cinematic journey that took place across diverse locations, from beachside San Diego to the Salton Sea, sand dunes, and downtown. This piece represents the constant connection to my Palestinian identity, a visual symbol of keeping that identity "activated."',
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
      text: 'Shot in multiple dynamic environments, the video was paired with an upbeat EDM soundtrack that added a layer of hope and peace to the visuals. Using a range of cinematic techniques, the project evokes an electric feeling, representing both personal and cultural empowerment.',
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
      text: 'This project showcases Sanshoots\' ability to blend storytelling with powerful imagery, capturing the essence of identity and resilience. Dive into the world of Palestine-Activated—a visual experience that embodies strength, hope, and cultural pride.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990319558';
const projectTitle = 'Palestine Activated';
const pageTitle = 'Palestine Activated';
const projectInfo = [
  'San Diego, CA, USA',
  '32.7157° N, 117.1611° W'
];
const projectTag = 'Cinematic';


const nextProjectTitle = "Palestine Will Be";
const nextProjectUrl = "/shortfilms/palestine-will-be";


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