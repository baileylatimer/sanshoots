import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/celsius/celsius-sanshoots--1.jpg';
import Image2 from '../../images/celsius/celsius-sanshoots--4.jpg';
import Image3 from '../../images/celsius/celsius-sanshoots--9.jpg';
import Image4 from '../../images/celsius/celsius-sanshoots--13.jpg';
import Image5 from '../../images/celsius/celsius-sanshoots--15.jpg';
import Image6 from '../../images/celsius/celsius-sanshoots--2.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'Luis Reactivating his Intense Workout with Celsius'
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
      text: 'Celsius, known for its energy-boosting drinks that promote vitality, fitness, and wellness, partnered with Luis, a content creator based in LA, for a dynamic mini commercial. This shoot highlighted Celsius’ commitment to enhancing metabolism and athletic performance with organic ingredients.',
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
      text: 'The concept involved Luis starting his run, taking a break, and receiving a Celsius drink from a friend. Upon drinking it, he bursts into an energetic workout routine, showcasing the immediate boost provided by Celsius. We used the Sony A7Siii with a 24-70mm f/2.8 G Master lens, shooting everything handheld to capture the dynamic and spontaneous vibe.',
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
      text: 'The video concluded with Luis feeling revitalized, perfectly capturing the essence of Celsius. The response from both Celsius and online viewers was overwhelmingly positive, with everyone loving the high energy and vitality of the ad. Collaborating with Luis and Celsius was an incredible experience, demonstrating Sanshoots\' ability to create engaging and impactful content quickly that drives results.',
    },
  },
];

const videoUrl = 'https://vimeo.com/988707714';
const projectTitle = 'Celsius';
const pageTitle = 'Celsius';
const projectInfo = [
  'Hollywood, CA, USA',
  '34.0907° N, 118.3266° W'
];
const projectTag = 'Food/Beverage';


const nextProjectTitle = "High-End Exotics";
const nextProjectUrl = "/showreel/high-end-exotics";


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