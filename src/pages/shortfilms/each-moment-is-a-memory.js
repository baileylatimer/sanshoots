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
        'A Tribute to Life\'s Unforgettable Moments'
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
      text: 'Each Moment is a Memory was shot in the beautiful terrains of Malibu and La Jolla, California. This video, paired with a reflective voiceover, emphasizes that each captured moment—whether through photo or video—is a portal back in time, reminding us to stay grounded and grateful for life’s experiences.',
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
      text: 'The visuals showcase sunsets, moments of reflection, and memories with friends, underscoring the idea that the people you surround yourself with play a key role in shaping who you are. The cinematic visuals perfectly align with the message of appreciating life\'s moments',
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
      text: 'This project highlights Sanshoots\' ability to blend visual storytelling with deep emotional themes, creating a piece that resonates with viewers on a personal level. Each Moment is a Memory invites viewers to reflect on their own captured moments and the people who make them special.',
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