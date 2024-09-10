import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/ob-vibes/ob-vibes-sanshoots--1.jpg';
import Image2 from '../../images/ob-vibes/ob-vibes-sanshoots--2.jpg';
import Image3 from '../../images/ob-vibes/ob-vibes-sanshoots--3.jpg';
import Image4 from '../../images/ob-vibes/ob-vibes-sanshoots--4.jpg';
import Image5 from '../../images/ob-vibes/ob-vibes-sanshoots--5.jpg';
import Image6 from '../../images/ob-vibes/ob-vibes-sanshoots--6.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'A Vibe of Authenticity and Connection'
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
      text: 'The Way You Made Them Feel was a fun and authentic day spent with friends, adventuring around Ocean Beach, California. Capturing moments of playing pool, watching the sunset, and enjoying the vibes, the video includes a storytelling element about how people remember the way you made them feel.',
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
      text: 'The project was centered around being your authentic self, exploring creativity, and connecting with others. Using text overlays to match the energy of the video, the storytelling and visuals blend seamlessly, creating a relatable and laid-back vibe.',
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
      text: 'This project showcases Sanshoots\' ability to turn everyday moments into meaningful stories, highlighting the value of human connection and creativity.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990320619';
const projectTitle = 'OB Vibes';
const pageTitle = 'Storytelling';
const projectInfo = [
  'Ocean Beach, CA, USA',
  '32.7495° N, 117.2470° W'
];
const projectTag = 'Storytelling';


const nextProjectTitle = "Glimpse of Home";
const nextProjectUrl = "/shortfilms/glimpse-of-home";


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