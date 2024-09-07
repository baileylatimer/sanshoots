import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';

import Image2 from '../../images/bluemoon/bluemoon-sanshoots--9.jpg';
import Image3 from '../../images/bluemoon/bluemoon-sanshoots--12.jpg';
import Image4 from '../../images/bluemoon/bluemoon-sanshoots--31.jpg';
import Image5 from '../../images/bluemoon/bluemoon-sanshoots--39.jpg';




const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'BlueMoon & Co.\'s',
        'Jewelry Takes Over the Arts District'
      ],
    },
  },
  {
    type: 'Reel',
    content: {
      reelUrl: 'https://vimeo.com/1006402982',
    },
  },
  {
    type: 'Reel',
    content: {
      reelUrl: 'https://vimeo.com/988706187',
    },
  },
  {
    type: 'Reel',
    content: {
      reelUrl: 'https://vimeo.com/988705619',
    },
  },
  {
    type: 'Paragraph',
    content: {
      heading: 'Telling their story',
      text: 'BlueMoon & Co., a Los Angeles-based jewelry company, specializes in custom pieces and works with top artists and influencers worldwide. Known for their pristine gold and diamonds, their brand exudes a dripped-out, swag vibe. Collaborating with BlueMoon & Co. was an exciting opportunity for Sanshoots.',
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
      text: 'For this project, we conceptualized eight spec ads featuring models showcasing BlueMoon’s jewelry around downtown Los Angeles. We selected diverse locations, including rooftops, streets, and graffiti-covered areas in the Arts District. Using the Sony A7Siii with a 24-70mm f/2.8 G Master lens, we shot vertically to optimize for reels format.',
    },
  },
  {
    type: 'Reel',
    content: {
      reelUrl: 'https://vimeo.com/988706391',
    },
  },
  {
    type: 'Reel',
    content: {
      reelUrl: 'https://vimeo.com/988705971',
    },
  },

  {
    type: 'Paragraph',
    content: {
      heading: 'Trust the process',
      text: 'The shoot included three main concepts: models putting on the jewelry, showcasing the pieces, and capturing behind-the-scenes moments. Working with Omar and Ramsey was seamless, thanks to their meticulous planning and resources. The top-notch models perfectly matched our locations, and our shots focused on highlighting the jewelry with trendy edits for Instagram and TikTok.',
    },
  },
  {
    type: 'Reel',
    content: {
      reelUrl: 'https://vimeo.com/988706580',
    },
  },
  {
    type: 'Reel',
    content: {
      reelUrl: 'https://vimeo.com/988704627',
    },
  },
  {
    type: 'Paragraph',
    content: {
      heading: 'In conclusion',
      text: 'This successful shoot not only showcased BlueMoon & Co.\'s stunning jewelry but also demonstrated Sanshoots\' ability to create visually compelling content that resonates with modern social media trends and aligns with brand values.',
    },
  },
];

const videoUrl = 'https://vimeo.com/988705130';
const projectTitle = 'Bluemoon';
const pageTitle = 'Bluemoon';
const projectInfo = [
  'Los Angeles, CA, USA',
  '34.0557° N, 118.2488° W'
];
const projectTag = 'Jewelry';


const nextProjectTitle = "Axe";
const nextProjectUrl = "/showreel/axe";


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