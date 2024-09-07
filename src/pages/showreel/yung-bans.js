import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/yung-bans/yung-bans-sanshoots--14.jpg';
import Image2 from '../../images/yung-bans/yung-bans-sanshoots--32.jpg';
import Image3 from '../../images/yung-bans/yung-bans-sanshoots--30.jpg';
import Image4 from '../../images/yung-bans/yung-bans-sanshoots--21.jpg';
import Image5 from '../../images/yung-bans/yung-bans-sanshoots--2.jpg';
import Image6 from '../../images/yung-bans/yung-bans-sanshoots--24.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'Yung Bans',
        'sets the desert on fire with new record ‘YSL’'
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
      heading: 'Telling his story',
      text: 'Yung Bans, a major influence in the hip-hop rap scene, brought his unique energy to a desert shoot that perfectly matched his distinct style. Working with Yung Bans was a thrilling experience, especially as a longtime fan from high school. This project involved shooting a music video for his new song "YSL" amidst the stark and evocative backdrop of train tracks in the desert.',
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
      text: 'For this shoot, we faced the challenge of 110° heat, which we managed with plenty of water and the right snacks to keep the team energized. Using my Sony A7Siii, I captured both handheld and gimbal shots to ensure fluid and dynamic visuals. The desert setting and Yung Bans\' performance required a warm-toned color grade, enhancing the raw and intense vibe of the video. His performance style, which combines minimal lip-syncing with high-energy dancing, brought an electrifying presence to the shoot.',
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
      text: 'Working with Yung Bans\' manager, Mo Sway, was a highlight of the project. His creative ideas and meticulous planning ensured that we stayed on schedule and captured the essence of Yung Bans\' performance. This recap showcases Sanshoots\' ability to adapt and deliver high-quality visuals in challenging conditions, creating a memorable and impactful music video.',
    },
  },
];

const videoUrl = 'https://vimeo.com/1006045937';
const projectTitle = 'Yung Bans';
const pageTitle = 'Yung Bans';
const projectInfo = [
  'California City, CA, USA',
  '35.1258° N, 117.9859° W'
];
const projectTag = 'Music Video';


const nextProjectTitle = "Francis Mercier";
const nextProjectUrl = "/showreel/francis-mercier";


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