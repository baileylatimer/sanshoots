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
import YungBans from "../videos/yung-bans.mp4";
import NourArdakani from "../videos/nour-ardakani.mp4";
import FrancisMercier from "../videos/francis-mercier.mp4";
import Paliroots from "../videos/paliroots.mp4";
import Bluemoon from "../videos/bluemoon.mp4";
import Axe from "../videos/axe.mp4";
import Gillette from "../videos/gillette.mp4";
import Celsius from "../videos/celsius.mp4";
import HighEndExotics from "../videos/highendexotics.mp4";
import Thg from "../videos/thehartfordgroup.mp4";
import Umr from "../videos/umr-relief.mp4";
import IntuitiveFoundation from "../videos/intuitive-foundation.mp4";
import EminentCollaborations from "../videos/eminent-collaborations.mp4";
import ColombiaAirbnb from "../videos/el-silencio-glamping.mp4";


// Sample data for the slider
const slidesData = [
  {
    videoSrc: Elyanna,
    title: "Elyanna",
    tag: "Event",
    linkTo: "/showreel/elyanna"
  },
  {
    videoSrc: YungBans,
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
