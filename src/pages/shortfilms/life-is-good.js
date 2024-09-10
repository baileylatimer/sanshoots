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
        'Capturing the Beauty in Everyday Moments.'
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
      text: 'The Life is Good shoot took place on the Los Peñasquitos Canyon Trail in November, capturing the vibrant fall colors and the beauty of simplicity. The video focused on the value of appreciating life\'s small moments, like going on a peaceful hike with a friend.',
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
      text: 'Working with my friend Tanner, we wanted to showcase how these simple, serene moments add up to make life richer. Shot in a calm, reflective atmosphere, the piece resonates with the message that life is truly good when you take the time to appreciate the little things.',
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
      text: 'This project highlights Sanshoots\' ability to create visually calming and meaningful content, emphasizing the joy found in everyday experiences. Life is Good serves as a reminder to cherish life’s moments, both big and small.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990316953';
const projectTitle = 'Life is Good';
const pageTitle = 'Life is Good';
const projectInfo = [
  'Penasquitos Creek Hike, CA, USA',
  '32.927608, -117.191108'
];
const projectTag = 'Cinematic';


const nextProjectTitle = "Race Exotics OC Meet";
const nextProjectUrl = "/shortfilms/raceexotics-oc-meet";


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