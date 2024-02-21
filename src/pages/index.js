import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Carousel from '../components/home-carousel';
import ProjectCardHome from "../components/project-card-home"
import HomeAbout from "../components/home-about"


import Hhs4 from "../videos/hhs-04.mp4"
import HeroVid from "../videos/hero-vid.mp4"
import PreProduction from "../videos/pre-production.mp4"
import Production from "../videos/production.mp4"
import PostProduction from "../videos/post-production.mp4"
import SanRun from "../videos/san-run.mp4"
import SanSand from "../videos/san-sand-1.mp4"


import Camera from "../components/home-camera";
import ServiceComponent from '../components/services';



const services = [
  { name: 'PRE-PRODUCTION', video: PreProduction },
  { name: 'PRODUCTION', video: Production },
  { name: 'POST-PRODUCTION', video: PostProduction },
];


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />

<div className="px-d">
<h5>Selected Works</h5>
</div>
    <div className="flex flex-col lg:flex-row  ">
  <ProjectCardHome link='/showreel' cover={SanRun}  title="Showreel" desc="01"/>
  <ProjectCardHome link='/shortfilms' cover={SanSand}  title="Short Films" desc="02"/>
  <ProjectCardHome link='/transitions' cover={Hhs4}  title="Transitions" desc="03"/>
</div>

<Camera />

<ServiceComponent services={services} />




  </Layout>
)

export default IndexPage
