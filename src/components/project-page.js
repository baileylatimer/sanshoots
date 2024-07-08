import React, { useEffect, useRef } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ReactPlayer from 'react-player/vimeo';

const ProjectPage = ({ videoUrl, projectDetails }) => {
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
              controls={false}
            />
          </div>
        </div>
        <div className="horizontal-sections">
          {projectDetails.map((detail, index) => (
            <div key={index} className="project-detail">
              {detail}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;
