import React, { useEffect, useRef } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ReactPlayer from 'react-player/vimeo';
import VideoSlider from './video-slider'; // Adjust the path as necessary

const ProjectPage = ({ videoUrl, projectDetails, projectTitle, sliderData, pageTitle }) => {
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
    switch (detail.type) {
      case 'Title':
        return (
          <div key={index} className="layout-title page-width">
            <h3 className='text-center'>{detail.content.heading}</h3>
          </div>
        );
      case 'Image':
        return (
          <div key={index} className=" layout-image content-width">
            <img src={detail.content.image} alt={`Detail ${index + 1}`} />
          </div>
        );
      case 'ImageText':
        return (
          <div key={index} className=" layout-image-text flex gap-24 ml-24">
            <div className='flex flex-col pl-96 px-36'>
              <h3>{detail.content.heading}</h3>
              <p>{detail.content.text}</p>
            </div>
            <img src={detail.content.image} alt={`Detail ${index + 1}`} />
          </div>
        );
        case 'Gallery':
          return (
            <div key={index} className="layout-gallery flex gap-4 ">
              <div className="w-1/2">
                <img src={detail.content.images[0]} alt={`Detail ${index + 1} - Image 1`} className="w-full h-full object-cover" />
              </div>
              <div className="w-1/2 flex flex-col gap-4">
                {detail.content.images.slice(1).map((image, imgIndex) => (
                  <img key={imgIndex} src={image} alt={`Detail ${index + 1} - Image ${imgIndex + 2}`} className="w-full h-1/3 object-cover" />
                ))}
              </div>
            </div>
          );
          case 'Paragraph':
            return (
              <div key={index} className="ml-24 layout-paragraph flex flex-col content-width">
       
                  <h3 className='whitespace-normal'>{detail.content.heading}</h3>
                  <p className='whitespace-normal'>{detail.content.text}</p>
            
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
        <div className="video-section">
          <div className="video-wrapper">
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              playing={true}
              loop={true}
              muted={true}
              controls={true}
              config={{
                vimeo: {
                  playerOptions: {
                    background: true,
                    autoplay: true,
                    muted: true,
                    loop: true,
                  }
                }
              }}
            />
            <div className="project-title">{projectTitle}</div>
          </div>
        </div>
        <div className="horizontal-sections">
          {projectDetails.map((detail, index) => (
            <div key={index} className="project-detail">
              {renderDetail(detail, index)}
            </div>
          ))}
        </div>
        <div className="video-slider-section">
          <VideoSlider slides={sliderData} enableHorizontalScroll={false} />
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;