import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Camera from "../components/home-camera"
import ServiceComponent from '../components/services'
import VideoSlider from '../components/video-slider';  // Adjust the path as necessary

import PreProduction from "../videos/yung-bans.mp4"
import Production from "../videos/production.mp4"
import PostProduction from "../videos/post-production.mp4"


// Import video files directly
import Elyanna from "../videos/elyanna-2.mp4";
import Elyanna2 from "../videos/elyanna-2.webm";
import Elyanna3 from "../images/elyanna.jpg";
import YungBans from "../videos/yung-bans.mp4";
import YungBans2 from "../videos/yung-bans.webm";
import YungBans3 from "../images/yung-bans.jpg";
import NourArdakani from "../videos/nour-ardakani.mp4";
import FrancisMercier from "../videos/francis-mercier.mp4";
import Paliroots from "../videos/paliroots.mp4";
import Bluemoon from "../videos/bluemoon.mp4";



// Sample data for the slider
const slidesData = [
  {
    mp4Src: Elyanna,
    webmSrc: Elyanna2,
    fallbackImageSrc: Elyanna3,
    title: "Elyanna",
    tag: "Event",
    linkTo: "/showreel/elyanna"
  },
  {
    mp4Src: YungBans,
    webmSrc: YungBans2,
    fallbackImageSrc: YungBans3,
    title: "Yung Bans",
    tag: "Music Video",
    linkTo: "/showreel/yung-bans"
  },
  {
    videoSrc: FrancisMercier,
    title: "Francis Mercier",
    tag: "Event",
    linkTo: "/showreel/francis-mercier"
  },

  {
    videoSrc: NourArdakani,
    title: "Nour Ardakani",
    tag: "Music Video",
    linkTo: "/showreel/nour-ardakani"
  },
  {
    videoSrc: Paliroots,
    title: "Paliroots",
    tag: "Apparel",
    linkTo: "/showreel/paliroots"
  },
  {
    videoSrc: Bluemoon,
    title: "Bluemoon",
    tag: "Jewelry",
    linkTo: "/showreel/bluemoon"
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


    <VideoSlider slides={slidesData} />

    <ServiceComponent services={services} />
  </Layout>
)

export default IndexPage
