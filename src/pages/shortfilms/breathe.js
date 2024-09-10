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
        'A Serene Escape to Inner Peace and Stillness'
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
      text: 'Breathe was shot in Palisades Park, Pacific Beach, San Diego, capturing moments of meditation and relaxation. Initially planned as a personal shoot, the footage transformed into a project that encourages taking a moment to breathe amidst life’s busyness.',
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
      text: 'This project highlights Sanshoots\' ability to create serene and introspective visual stories, reminding viewers to pause, breathe, and recharge.',
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
      text: 'Collaborating with Alejandro and Axe was fantastic. The final video received excellent feedback, driving significant engagement and sales on TikTok and IG reels. This project showcases Sanshoots\' ability to create impactful content under tight deadlines.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990321433';
const projectTitle = 'Breathe';
const pageTitle = 'Cinematic';
const projectInfo = [
  'Pacfic Beach, CA, USA',
  '32.8025° N, 117.2356° W'
];
const projectTag = 'Cinematic';


const nextProjectTitle = "OB Vibes";
const nextProjectUrl = "/shortfilms/ob-vibes";


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