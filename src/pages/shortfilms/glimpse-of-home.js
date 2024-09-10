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
        'A Heartfelt Tribute to Roots, Family, and Heritage'
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
      text: 'Glimpse of Home captures a deeply personal trip back to Palestine with my dad, grandma, and grandpa, visiting Turmus\'ayya. The video highlights the beauty of simple moments—picking olives, enjoying breakfast on the mountain, and tasting figs fresh from my grandma\'s garden.',
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
      text: 'This project holds immense nostalgic value, as I’ve returned to my homeland every year since childhood. Being back home with my grandparents is an emotional experience, and this piece is a tribute to the strong connection I feel to my roots. My dream is to always remain connected to my homeland, where my heart belongs.',
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
      text: 'This project showcases Sanshoots\' ability to evoke powerful emotions through storytelling, capturing the essence of home and heritage in a way that resonates deeply with the audience. Glimpse of Home is a heartfelt journey back to where it all began.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990320017';
const projectTitle = 'Glimpse of Home';
const pageTitle = 'Glimpse of Home';
const projectInfo = [
  'Turmus’ayya, Palestine',
  '32.0327° N, 35.2884° E'
];
const projectTag = 'Travel';


const nextProjectTitle = "Die One Day";
const nextProjectUrl = "/shortfilms/die-one-day";


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