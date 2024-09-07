import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/gillette/gillette-sanshoots--1.jpg';
import Image2 from '../../images/gillette/gillette-sanshoots--17.jpg';
import Image3 from '../../images/gillette/gillette-sanshoots--2.jpg';
import Image4 from '../../images/gillette/gillette-sanshoots--6.jpg';
import Image5 from '../../images/gillette/gillette-sanshoots--7.jpg';
import Image6 from '../../images/gillette/gillette-sanshoots--15.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'From Rides to Goals, Alejandro Stays Fresh With Gillette'
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
      text: 'Gillette, a leading brand in men’s grooming, recently expanded its product line to include personal care items such as deodorants, body washes, and body sprays. Partnering with Alejandro Rosario, we created two dynamic commercials to highlight these new products.',
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
      text: 'The first concept took us to Six Flags, capturing Alejandro enjoying the rides with friends while using Gillette deodorant to stay fresh. The second concept was set at an LA Galaxy soccer game, showcasing Alejandro’s day at the stadium while promoting the deodorant\'s long-lasting freshness. Both settings emphasized the product\'s effectiveness in various active environments. We shot the entire project using the Sony A7Siii with a 24-70mm f/2.8 G Master lens, all handheld and vertical to maximize social media impact.',
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
      text: 'The vibrant and energetic footage was well-received, reflecting Gillette’s innovative and high-quality brand image. Collaborating with Alejandro and the Gillette team was a fantastic experience. This project demonstrates Sanshoots\' ability to create engaging content that resonates with specific audiences.',
    },
  },
];

const videoUrl = 'https://vimeo.com/988707377';
const projectTitle = 'Gillette';
const pageTitle = 'Gillette';
const projectInfo = [
  'The Valley, CA, USA',
  '34.1826° N, 118.4397° W'
];
const projectTag = 'Beauty';


const nextProjectTitle = "Celsius";
const nextProjectUrl = "/showreel/celsius";


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