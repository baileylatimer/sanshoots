import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';
import Image1 from '../../images/paliroots/paliroots-sanshoots--20.jpg';
import Image2 from '../../images/paliroots/paliroots-sanshoots--7.jpg';
import Image3 from '../../images/paliroots/paliroots-sanshoots--16.jpg';
import Image4 from '../../images/paliroots/paliroots-sanshoots--17.jpg';
import Image5 from '../../images/paliroots/paliroots-sanshoots--14.jpg';
import Image6 from '../../images/paliroots/paliroots-sanshoots--11.jpg';



const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'PaliRoots Brings',
        'Active Lifestyle to Life in Venice Beach'
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
      heading: 'Telling their story',
      text: 'PaliRoots is a clothing and lifestyle brand that celebrates Palestinian heritage and culture, founded by Aminah and Hussein. Their mission is to foster a sense of unity and pride among Palestinians and supporters worldwide through a diverse range of products reflecting the rich history, art, and traditions of Palestine. Working with a brand that gives back to the community is always a rewarding experience for Sanshoots.',
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
      text: 'For this project, Aminah and I drew inspiration from a song that resonated with us, leading to the idea of a mini spec ad set in Venice Beach. We aimed to showcase the active lifestyle associated with PaliRoots by filming scenes of us playing basketball and soccer. Using the Sony A7Siii at 4K 60 FPS with a 24-70mm f/2.8 G Master lens, we opted for handheld shooting to capture dynamic and authentic moments.',
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
      text: 'Collaborating with Aminah is always a pleasure, given her creative mind and our synergy in producing top-notch videos. The edit featured an Afrobeat mix that matched the energy of the shoot, with a focus on neutral colors, a hint of pop, and a super sharp image enhanced by beautiful motion blur. The result is a mini-spec ad that embodies simplicity and strong brand recognition. This project indicates the seamless collaboration with PaliRoots and Aminah, highlighting Sanshoots\' ability to produce visually compelling content that resonates with the brand’s philanthropic values.',
    },
  },
];

const videoUrl = 'https://vimeo.com/manage/videos/988702903';
const projectTitle = 'Paliroots';
const pageTitle = 'Paliroots';
const projectInfo = [
  'Venice Beach, CA, USA',
  '33.9941° N, 118.4527° W'
];
const projectTag = 'Apparel';


const nextProjectTitle = "Bluemoon";
const nextProjectUrl = "/work/bluemoon";


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