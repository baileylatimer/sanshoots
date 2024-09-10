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
        'A High-Octane Trek Through Orange County\'s Exotic Car Scene'
      ],
    },
  },
  {
    type: 'Reel',
    content: {
      reelUrl: 'https://vimeo.com/990321789',
    },
  },
  {
    type: 'Paragraph',
    content: {
      heading: 'Telling the story',
      text: 'This spontaneous project took place in Orange County, where a group of exotic cars and enthusiasts gathered to show off their setups. After linking up with the Race Exotics crew in Birdrock, San Diego, we made our way to OC the same day, capturing the energy of the meet and some exhilarating highway pulls.',
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
      text: 'Shooting with the Race Exotics team was an incredible experience, and the vibe was nothing short of electric. The video highlights the luxury cars and high-energy atmosphere of the event, all pulled together with little planning but a lot of creativity.',
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
      text: 'This project demonstrates Sanshoots\' ability to capture dynamic, high-energy moments on the fly, showcasing the thrill and excitement of the Race Exotics OC meet. Dive into the action and experience the energy of the event through this cinematic piece.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990322167';
const projectTitle = 'Race Exotics OC Meet';
const pageTitle = 'Race Exotics OC Meet';
const projectInfo = [
  'Laguna Niguel, CA, USA',
  '33.5237° N, 117.7149° W'
];
const projectTag = 'Auto';


const nextProjectTitle = "Forever on My Mind";
const nextProjectUrl = "/shortfilms/forever-on-my-mind";


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