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
import Paliroots from "../videos/paliroots.mp4";
import Paliroots2 from "../videos/paliroots.webm";
import Paliroots3 from "../images/paliroots.jpg";
import PalestineWillBe from "../videos/palestine-will-be.mp4";
import PalestineWillBe2 from "../videos/palestine-will-be.webm";
import PalestineWillBe3 from "../images/palestine-will-be.jpg";
import ChaosToCalm from "../videos/chaos-to-calm.mp4";
import ChaosToCalm2 from "../videos/chaos-to-calm.webm";
import ChaosToCalm3 from "../images/chaos-to-calm.jpg";
import Cybertruck from "../videos/tesla-cybertruck.mp4";
import Cybertruck2 from "../videos/tesla-cybertruck.webm";
import Cybertruck3 from "../images/tesla-cybertruck.jpg";



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
    mp4Src: Paliroots,
    webmSrc: Paliroots2,
    fallbackImageSrc: Paliroots3,
    title: "Paliroots",
    tag: "Apparel",
    linkTo: "/showreel/paliroots"
  },
  {
    mp4Src: PalestineWillBe,
    webmSrc: PalestineWillBe2,
    fallbackImageSrc: PalestineWillBe3,
    title: "Palestine Will Be",
    tag: "Cinematic",
    linkTo: "/shortfilms/palestine-will-be"
  },
  {
    mp4Src: ChaosToCalm,
    webmSrc: ChaosToCalm2,
    fallbackImageSrc: ChaosToCalm3,
    title: "Chaos To Calm",
    tag: "Shortfilm",
    linkTo: "/shortfilms/chaos-to-calm"
  },
  {
    mp4Src: Cybertruck,
    webmSrc: Cybertruck2,
    fallbackImageSrc: Cybertruck3,
    title: "Tesla Cybertruck",
    tag: "Auto",
    linkTo: "/shortfilms/tesla-cybertruck"
  },
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
