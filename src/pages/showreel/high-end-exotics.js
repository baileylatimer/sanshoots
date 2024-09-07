import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';

import Image2 from '../../images/high-end-exotics/high-end-exotics-sanshoots--11.jpg';
import Image3 from '../../images/high-end-exotics/high-end-exotics-sanshoots--5.jpg';
import Image4 from '../../images/high-end-exotics/high-end-exotics-sanshoots--7.jpg';
import Image5 from '../../images/high-end-exotics/high-end-exotics-sanshoots--4.jpg';




const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'Where Luxury Meets Precision'
      ],
    },
  },
  {
    type: 'Reel',
    content: {
      reelUrl: 'https://vimeo.com/988708474',
    },
  },
  {
    type: 'Reel',
    content: {
      reelUrl: 'https://vimeo.com/988708695',
    },
  },

  {
    type: 'Paragraph',
    content: {
      heading: 'Telling their story',
      text: 'Highend Exotics, based in Chicago, specializes in luxury rentals for sports cars and pristine big-body vehicles. Collaborating with twin brothers Ameer and Awad was seamless, thanks to their dedication and shared vision with Sanshoots.',
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
      text: 'We created four vertical reels featuring different cars, using a hyper-edit style with trendy transitions and smooth effects. Shot handheld with a Sony A7Siii and 24-70mm f/2.8 G Master lens, the shoot took place in the backside of their warehouse.',
    },
  },
  {
    type: 'Reel',
    content: {
      reelUrl: 'https://vimeo.com/988708908',
    },
  },

  {
    type: 'Paragraph',
    content: {
      heading: 'In conclusion',
      text: 'Despite being spontaneous, the focus was on capturing the cars from various angles to attract high-profile clients. This project highlights Sanshoots\' ability to produce high-quality, engaging content quickly, showcasing the luxury and allure of Highend Exotics.',
    },
  },
];

const videoUrl = 'https://vimeo.com/988707781';
const projectTitle = 'High-End Exotics';
const pageTitle = 'High-End Exotics';
const projectInfo = [
  'Chicago, IL, USA',
  '41.8781° N, 87.6298° W'
];
const projectTag = 'Auto';


const nextProjectTitle = "The Hartford Group";
const nextProjectUrl = "/showreel/the-hartford-group";


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