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
        'A Call to Live Fully and Fearlessly'
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
      text: 'Die One Day was shot across various locations in San Diego, blending city and mountain backdrops to create a reflective and motivational piece. Inspired by a powerful voiceover about living as though you could die tomorrow, the video serves as a reminder to balance hard work with the freedom to live fully outside of societal constraints.',
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
      text: 'The visuals showcase moments from my lifestyle, illustrating the message of working hard while remembering to live purposefully. The tone of the video aligns with the voiceover, urging viewers to seize the day and make an impact on the world.',
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
      text: 'This project demonstrates Sanshoots\' ability to blend motivational storytelling with striking visuals, reminding audiences to live with intent and embrace the uncertainty of life. Die One Day is a cinematic call to action, encouraging people to make the most of every moment.',
    },
  },
];

const videoUrl = 'https://vimeo.com/990317373';
const projectTitle = 'Die One Day';
const pageTitle = 'Die One Day';
const projectInfo = [
  'San Diego, CA, USA',
  '2.7157° N, 117.1611° W'
];
const projectTag = 'Storytelling';


const nextProjectTitle = "Lost in Mexico";
const nextProjectUrl = "/shortfilms/lost-in-mexico";


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