import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import ProjectCardHome from "../components/project-card-home"
import HomeAbout from "../components/home-about"


import Hhs4 from "../videos/hhs-04.mp4"
import Heels from "../videos/heels.mp4"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <HomeAbout />
<div className="flex flex-col lg:flex-row  lg:mt-20">
  <ProjectCardHome link='/showreel/heels' cover={Heels}  title="Heels" desc="01"/>
  <ProjectCardHome link='/showreel/hip-hop' cover={Hhs4}  title="Hip Hop" desc="02"/>
</div>


  </Layout>
)

export default IndexPage
