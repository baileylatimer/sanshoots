import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Carousel from '../components/home-carousel';
import ProjectCardHome from "../components/project-card-home"
import HomeAbout from "../components/home-about"


import Hhs4 from "../videos/hhs-04.mp4"
import ThreeCarousel from '../components/ThreeCarousel';

const images = [
  '../images/project-cover--01.jpg',
  '../images/project-cover--01.jpg',
  // more images
];



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />


<div>
      <h1>My 3D Carousel</h1>
      <ThreeCarousel images={images} />
    </div>


    <Carousel>
      <div className="carousel-item">Item 1</div>
      <div className="carousel-item">Item 2</div>
      <div className="carousel-item">Item 3</div>
      {/* More items */}
    </Carousel>


  </Layout>
)

export default IndexPage
