import React from 'react';
import { Link } from "gatsby"
import BackgroundVideo from "./bg-video"


const ProjectCardHome  = ({ title, desc, link, cover }) => {

  
  return (
    <li className=" relative"  >
      <Link to={link} className=" project-card">
        <div className="video-container">
          <BackgroundVideo video={cover}/>
        </div>
        <div class="flex justify-between my-4 mx-4">
            <h4 class="">{title}</h4>
            <h4 className="lg:mt-0 color-contrast-medium"id="card-title-2">{desc}</h4>
        </div>
        </Link>
        {/* <CustomCursor /> */}
    </li>
);
};

export default ProjectCardHome