import React, { useEffect } from 'react';
import ProjectPage from '../../components/project-page';

import Image1 from '../../images/el-silencio-glamping/el-silencio-glamping-sanshoots--1.jpg';
import Image2 from '../../images/el-silencio-glamping/el-silencio-glamping-sanshoots--7.jpg';
import Image3 from '../../images/el-silencio-glamping/el-silencio-glamping-sanshoots--3.jpg';
import Image4 from '../../images/el-silencio-glamping/el-silencio-glamping-sanshoots--4.jpg';
import Image5 from '../../images/el-silencio-glamping/el-silencio-glamping-sanshoots--5.jpg';
import Image6 from '../../images/el-silencio-glamping/el-silencio-glamping-sanshoots--2.jpg';

import Image7 from '../../images/el-silencio-glamping/el-silencio-glamping-sanshoots--6.jpg';
import Image8 from '../../images/el-silencio-glamping/el-silencio-glamping-sanshoots--8.jpg';
import Image9 from '../../images/el-silencio-glamping/el-silencio-glamping-sanshoots--9.jpg';


const projectDetails = [
  {
    type: 'Title',
    content: {
      heading: [
        'A Serene Mountain Escape To Reconnect with Nature'
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
      heading: 'Telling The Story',
      text: 'El Silencio Glamping Hut offers a serene escape to reconnect with nature, away from the noise and stress of city life. Nestled in the mountains of the coffee belt near Santa Rosa, Pereira, it provides a unique experience to travelers. Working with Jorge and his wife was an incredible experience during my stay in their Airbnb on their coffee farm.',
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
      text: 'The shoot involved creating an advertisement video featuring a model showcasing the glamping hut for their website and business. The serene environment, with the sounds of nature and stunning views, made for a life-changing experience. Using a Sony A7Siii with a 24-70mm f/2.8 G Master lens, I captured a dynamic range of shots to highlight the luxurious yet natural setting, including the Jacuzzi, coffee shop, and amazing hospitality.',
    },
  },

  {
    type: 'Gallery',
    content: {
      images: [
        Image6,
        Image7,
        Image8,
        Image9
      ],
    },
  }
];

const videoUrl = 'https://vimeo.com/988717785';
const projectTitle = 'El Silencio Glamping';
const pageTitle = 'El Silencio Glamping';
const projectInfo = [
  'Santa Rosa de Cabal, Colombia',
  '4.8701° N, 75.6224° W'
];
const projectTag = 'Hospitality';



const nextProjectTitle = "Elyanna";
const nextProjectUrl = "/work/elyanna";

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