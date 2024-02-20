import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Carousel from '../components/home-carousel';
import ProjectCardHome from "../components/project-card-home"
import HomeAbout from "../components/home-about"


import Hhs4 from "../videos/hhs-04.mp4"
import ThreeCarousel from '../components/ThreeCarousel';





const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />


    <div className="flex flex-col lg:flex-row  lg:mt-20">
  <ProjectCardHome link='/showreel' cover={Hhs4}  title="Showreel" desc="01"/>
  <ProjectCardHome link='/shortfilms' cover={Hhs4}  title="Short Films" desc="02"/>
  <ProjectCardHome link='/transitions' cover={Hhs4}  title="Transitions" desc="03"/>
</div>




  </Layout>
)

export default IndexPage
