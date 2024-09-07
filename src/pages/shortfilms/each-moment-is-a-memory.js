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
        'Alejandro Rosario\'s Active Lifestyle Fueled by Axe'
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
      text: 'Axe, synonymous with youthful masculinity and confidence, partnered with Alejandro Rosario for a short commercial. The concept showcased Alejandro’s morning routine and active lifestyle, emphasizing how Axe body spray keeps him fresh while playing soccer.',
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
      text: 'Using the Sony A7Siii with a 24-70mm f/2.8 G Master lens, we shot the entire project handheld, incorporating smooth transitions and dynamic camera movements. Despite a tight turnaround, we developed the concept, completed the shoot, and edited within eight hours.',
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

const videoUrl = 'https://vimeo.com/990317643';
const projectTitle = 'Each Moment is a Memory';
const pageTitle = 'Each Moment is a Memory';
const projectInfo = [
  'La Jolla, CA, USA',
  '32.8328° N, 117.2713° W'
];
const projectTag = 'Travel';


const nextProjectTitle = "Embrace Your Journey";
const nextProjectUrl = "/shortfilms/embrace-your-journey";


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