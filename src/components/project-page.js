import React, { useEffect } from 'react';
import Layout from './layout';
import SEO from './seo';
import ReactPlayer from 'react-player/vimeo';
import { navigate } from 'gatsby';

const ProjectPage = ({ videoUrl, projectDetails, projectTitle }) => {
  useEffect(() => {
    const handleScroll = () => {
      const nextProjectElement = document.getElementById('next-project');
      if (nextProjectElement) {
        const rect = nextProjectElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          console.log('Navigating to next project...'); // Debug log
          navigate('/work/francis-mercier');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout className="project-page">
      <SEO title={projectTitle} />
      <div className="project-page-container">
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
            <h1 className="project-title">{projectTitle}</h1>
          </div>
        </div>
        <div className="horizontal-sections">
          {projectDetails.map((detail, index) => {
            if (detail.type === 'nextProject') {
              return (
                <div key={index} id="next-project" className="project-detail">
                  <h1>{detail.content.nextProjectTitle}</h1>
                </div>
              );
            }
            return (
              <div key={index} className={`project-detail ${detail.type}`}>
                {detail.type === 'layout1' && <h1>{detail.content.heading}</h1>}
                {detail.type === 'layout2' && <img src={detail.content.image} alt="Project Detail" />}
                {detail.type === 'layout3' && (
                  <>
                    <h3>{detail.content.heading}</h3>
                    <p>{detail.content.text}</p>
                    <img src={detail.content.image} alt="Project Detail" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;
