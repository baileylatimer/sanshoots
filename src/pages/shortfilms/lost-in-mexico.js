import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/lost-in-mexico/lost-in-mexico-sanshoots--1.jpg';
import Image2 from '../../images/lost-in-mexico/lost-in-mexico-sanshoots--2.jpg';
import Image3 from '../../images/lost-in-mexico/lost-in-mexico-sanshoots--3.jpg';
import Image4 from '../../images/lost-in-mexico/lost-in-mexico-sanshoots--4.jpg';
import Image5 from '../../images/lost-in-mexico/lost-in-mexico-sanshoots--5.jpg';
import Image6 from '../../images/lost-in-mexico/lost-in-mexico-sanshoots--6.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'A Journey Through Tulum\'s Vibrant Culture and Paradise'
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
      text: 'Lost in Mexico was shot in the tropical paradise of Tulum, capturing the essence of Mexico\'s rich culture and stunning landscapes. This cinematic reel highlights everything from water holes to beautiful animals and local architecture, all set to a Latin-inspired soundtrack that perfectly matches the vibrant atmosphere.',
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
      text: 'Although it was a spontaneous project shot during a vacation, the combination of tropical vibes, heat, and the right people made this an unforgettable experience. The visuals reflect the adventure and beauty of Mexico, showing that sometimes, the best moments happen unplanned.',
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
      text: 'This project showcases Sanshoots\' ability to capture the essence of travel and adventure, turning everyday experiences into visually compelling stories. Lost in Mexico is a tribute to the beauty and culture of Tulum.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990320972';
const projectTitle = 'Lost in Mexico';
const pageTitle = 'Lost in Mexico';
const projectInfo = [
  'Tulum, Mexico',
  '20.2114° N, 87.4654° W'
];
const projectTag = 'Travel';


const nextProjectTitle = "Each Moment is a Memory";
const nextProjectUrl = "/shortfilms/each-moment-is-a-memory";


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