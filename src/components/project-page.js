import React, { useEffect, useRef } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ReactPlayer from 'react-player/vimeo';

const ProjectPage = ({ videoUrl, projectDetails, projectTitle }) => {
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
      case 'layout1':
        return (
          <div key={index} className="project-detail layout1 content-width">
            <h3>{detail.content.heading}</h3>
          </div>
        );
      case 'layout2':
        return (
          <div key={index} className="project-detail layout2">
            <img src={detail.content.image} alt={`Detail ${index + 1}`} />
          </div>
        );
      case 'layout3':
        return (
          <div key={index} className="project-detail layout3 flex gap-24 ml-24">
            <div className='flex flex-col'>
              <h3>{detail.content.heading}</h3>
              <p>{detail.content.text}</p>
            </div>
            <img src={detail.content.image} alt={`Detail ${index + 1}`} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout className="project-page">
      <SEO title="Project Page" />
      <div className="project-page-container" ref={containerRef}>
        <div className="video-section">
          <div className="video-wrapper">
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              playing
              loop
              muted
              controls={true}
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
      </div>
    </Layout>
  );
};

export default ProjectPage;
