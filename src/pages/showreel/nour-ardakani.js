import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/nour-ardakani/nour-ardakani-sanshoots--7.jpg';
import Image2 from '../../images/nour-ardakani/nour-ardakani-sanshoots--10.jpg';
import Image3 from '../../images/nour-ardakani/nour-ardakani-sanshoots--8.jpg';
import Image4 from '../../images/nour-ardakani/nour-ardakani-sanshoots--11.jpg';
import Image5 from '../../images/nour-ardakani/nour-ardakani-sanshoots--17.jpg';
import Image6 from '../../images/nour-ardakani/nour-ardakani-sanshoots--22.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'Nour Ardakani\'s',
        'new single shot in Malibu Miles above the moon'
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
      heading: 'Telling her story',
      text: 'Nour Ardakani, a talented pop singer with Lebanese roots, is rapidly making her mark in Los Angeles. Collaborating with Nour was an incredible experience, especially given her vibrant performance energy. Inspired by her song, we envisioned scenes of flowers, fields, and mountains, ultimately choosing a picturesque location near Malibu, California.',
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
      text: 'For this shoot, we utilized the Sony A7Siii with a 24-70mm f/2.8 G Master lens and a gimbal, equipped with an ND filter to handle the broad daylight. We captured a variety of shots, from sunlit cliffs by the water to a charming swing set. Our approach included wide and close-up shots, tracking movements, and even a few car scenes to add dynamic perspectives. Despite the spontaneity of planning the entire shoot over a quick coffee meeting, everything came together seamlessly.',
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
      text: 'The editing process involved a natural, bright, and colorful tone to match the vibrant outdoor setting. Working with Nour was a smooth and enjoyable experience, filled with fun moments and creative spontaneity. The entire shoot, completed in just four hours, perfectly captured the beautiful California vibes. This project not only showcases Sanshoots\' ability to deliver high-quality visuals but also highlights our knack for capturing the essence of an artist\'s vision.',
    },
  },
];

const videoUrl = 'https://vimeo.com/988693318';
const projectTitle = 'Nour Ardakani';
const pageTitle = 'Nour Ardakani';
const projectInfo = [
  'Malibu, CA, USA',
  '34.0381° N, 118.6923° W'
];
const projectTag = 'Music Video';


const nextProjectTitle = "Paliroots";
const nextProjectUrl = "/showreel/paliroots";


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