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
        'A Nostalgic Voyage Through the Heart of Jerusalem'
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
      text: 'Forever on My Mind was shot in Jerusalem, Palestine, where I explored the capital alongside my cousins, capturing the essence of our homeland. The video highlights street vendors, the vibrant atmosphere, and the iconic Dome of the Rock mosque.',
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
      text: 'The feeling of being back home, touching the soil, and walking the ancient streets is unexplainable. I crafted this piece with inspiration from Saint Levant’s music, aiming to evoke the historical depth of the city through a vintage color grade, giving it an "old city" feel. The project embodies not only the beauty of Palestine but the emotional connection to its rich history.',
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
      text: 'This project showcases Sanshoots\' ability to capture deep, meaningful connections through visual storytelling. Forever on My Mind is a nostalgic journey that reflects the heart and soul of Palestine.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990319168';
const projectTitle = 'Forever on My Mind';
const pageTitle = 'Forever on My Mind';
const projectInfo = [
  'Jerusalem, Palestine',
  '31.7683° N, 35.2137° E'
];
const projectTag = 'Travel';


const nextProjectTitle = "Breathe";
const nextProjectUrl = "/shortfilms/breathe";


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