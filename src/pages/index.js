import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Camera from "../components/home-camera"
import ServiceComponent from '../components/services'
import VideoSlider from '../components/video-slider';  // Adjust the path as necessary

import PreProduction from "../videos/pre-production.mp4"
import Production from "../videos/production.mp4"
import PostProduction from "../videos/post-production.mp4"


// Import video files directly
import Elyanna from "../videos/elyanna-2.mp4";
import NourArdakani from "../videos/production.mp4";
import FrancisMercier from "../videos/francis-mercier.mp4";
import Paliroots from "../videos/production.mp4";
import Bluemoon from "../videos/san-eye.mp4";
import Axe from "../videos/san-sand-1.mp4";


// Sample data for the slider
const slidesData = [
  {
    videoSrc: Elyanna,
    title: "Elyanna",
    tag: "Music",
    linkTo: "/work/elyanna"
  },
  {
    videoSrc: FrancisMercier,
    title: "Francis Mercier",
    tag: "Music",
    linkTo: "/second-video"
  },
  {
    videoSrc: NourArdakani,
    title: "Nour Ardakani",
    tag: "Music",
    linkTo: "/second-video"
  },

  {
    videoSrc: Paliroots,
    title: "Paliroots",
    tag: "Fashion",
    linkTo: "/second-video"
  },
  {
    videoSrc: Bluemoon,
    title: "Bluemoon",
    tag: "Jewelry",
    linkTo: "/second-video"
  },
  {
    videoSrc: Axe,
    title: "Axe",
    tag: "Beauty",
    linkTo: "/second-video"
  }
];

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

    <VideoSlider slides={slidesData} />
    <Camera />
    <ServiceComponent services={services} />
  </Layout>
)

export default IndexPage
