import React, { useEffect, useRef } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ReactPlayer from 'react-player/vimeo';
import VideoSlider from './video-slider';
import Btn from "./btn";

const ProjectPage = ({ 
  videoUrl, 
  projectDetails, 
  projectTitle, 
  projectInfo, 
  projectTag,
  sliderData, 
  pageTitle,
  nextProjectTitle,
  nextProjectUrl
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = (e) => {
      if (container) {
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const renderDetail = (detail, index) => {
    const isSmallWidth = detail.type === 'Image' || detail.type === 'Paragraph';
    const detailClass = `project-detail ${isSmallWidth ? 'project-detail--sm' : ''}`;

    switch (detail.type) {
      case 'Title':
        return (
          <div key={index} className={`${detailClass}`}>
            <div className='layout-title page-width'>
              <h3 className='text-center'>
                {detail.content.heading.map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < detail.content.heading.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>
            </div>
          </div>
        );
      case 'Image':
        return (
          <div key={index} className={`${detailClass}`}>
            <div className='layout-image '>
              <img src={detail.content.image} alt={`Detail ${index + 1}`} />
            </div>
          </div>
        );
      case 'ImageText':
        return (
          <div key={index} className={`${detailClass} `}>
            <div className='layout-image-text flex gap-24 ml-24'>
              <div className='flex flex-col pl-96 px-36'>
                <h3>{detail.content.heading}</h3>
                <p>{detail.content.text}</p>
              </div>
              <img src={detail.content.image} alt={`Detail ${index + 1}`} />
            </div>
          </div>
        );
      case 'Gallery':
        return (
          <div key={index} className={`${detailClass}`}>
            <div className='layout-gallery flex flex-col md:flex-row gap-4 h-full'>
              <div className="w-full md:w-1/2 h-1/2 md:h-full">
                <img 
                  src={detail.content.images[0]} 
                  alt={`Detail ${index + 1} - Image 1`} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4 h-1/2 md:h-full">
                <div className="h-1/2">
                  <img 
                    src={detail.content.images[1]} 
                    alt={`Detail ${index + 1} - Image 2`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="h-1/2 lg:h-1/2 flex gap-4">
                  <div className="w-1/2 h-full">
                    <img 
                      src={detail.content.images[2]} 
                      alt={`Detail ${index + 1} - Image 3`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="w-1/2 h-full">
                    <img 
                      src={detail.content.images[3]} 
                      alt={`Detail ${index + 1} - Image 4`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Paragraph':
        return (
          <div key={index} className={`${detailClass}`}>
            <div className='layout-paragraph flex flex-col content-width'>
              <h3 className='whitespace-normal'>{detail.content.heading}</h3>
              <p className='whitespace-normal'>{detail.content.text}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout className="project-page">
      <SEO title={pageTitle || "Project Page"} />
      <div className="project-page-container" ref={containerRef}>
      <div className="video-section bg-inverse">
          <div className="video-wrapper flex justify-center items-center">
            <div className="video-player-container">
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="100%"
                playing={true}
                loop={true}
                muted={false}
                controls={true}
                config={{
                  vimeo: {
                    playerOptions: {
                      background: false,
                      autoplay: true,
                      muted: false,
                      loop: true,
                      controls: true,
                    }
                  }
                }}
              />
            </div>
            <div className="video-overlay">
              <div className='project-overview flex flex-col lg:flex-row justify-between w-full pl-6 lg:pl-0'>
                <div className="project-title">{projectTitle}</div>
                <div className="project-info">
                  {projectInfo.map((info, index) => (
                    <React.Fragment key={index}>
                      {info}
                      {index < projectInfo.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  <div className='pill pill--ghost mt-4'>{projectTag}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-sections">
          {projectDetails.map((detail, index) => renderDetail(detail, index))}
        </div>

        <div className="next-project-section bg-inverse w-screen h-screen flex flex-col items-center justify-center">
          <p className=" color-bg uppercase ">Next Project</p>
          <h2 data-text={nextProjectTitle} className=" color-bg glitch">{nextProjectTitle}</h2>
          <Btn link={nextProjectUrl} text="View Now" type="btn--ghost" />
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;




const renderDetail = (detail, index) => {
  const isSmallWidth = detail.type === 'Image' || detail.type === 'Paragraph';
  const detailClass = `project-detail ${isSmallWidth ? 'project-detail--sm' : ''}`;

  switch (detail.type) {
    case 'Title':
      return (
        <div key={index} className={`${detailClass}`}>
          <div className='layout-title page-width'>
            <h3 className='text-center'>
              {detail.content.heading.map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  {lineIndex < detail.content.heading.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>
          </div>
        </div>
      );
    case 'Image':
      return (
        <div key={index} className={`${detailClass}`}>
          <div className='layout-image '>
            <img src={detail.content.image} alt={`Detail ${index + 1}`} />
          </div>
        </div>
      );
    case 'ImageText':
      return (
        <div key={index} className={`${detailClass} `}>
          <div className='layout-image-text flex gap-24 ml-24'>
            <div className='flex flex-col pl-96 px-36'>
              <h3>{detail.content.heading}</h3>
              <p>{detail.content.text}</p>
            </div>
            <img src={detail.content.image} alt={`Detail ${index + 1}`} />
          </div>
        </div>
      );
    case 'Gallery':
      return (
        <div key={index} className={`${detailClass}`}>
          <div className='layout-gallery flex flex-col md:flex-row gap-4 h-full'>
            <div className="w-full md:w-1/2 h-1/2 md:h-full">
              <img 
                src={detail.content.images[0]} 
                alt={`Detail ${index + 1} - Image 1`} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4 h-1/2 md:h-full">
              <div className="h-1/2">
                <img 
                  src={detail.content.images[1]} 
                  alt={`Detail ${index + 1} - Image 2`} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="h-1/2 lg:h-1/2 flex gap-4">
                <div className="w-1/2 h-full">
                  <img 
                    src={detail.content.images[2]} 
                    alt={`Detail ${index + 1} - Image 3`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="w-1/2 h-full">
                  <img 
                    src={detail.content.images[3]} 
                    alt={`Detail ${index + 1} - Image 4`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'Paragraph':
      return (
        <div key={index} className={`${detailClass}`}>
          <div className='layout-paragraph flex flex-col content-width'>
            <h3 className='whitespace-normal'>{detail.content.heading}</h3>
            <p className='whitespace-normal'>{detail.content.text}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};