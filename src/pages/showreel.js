import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import VideoSlider from '../components/video-slider';  // Adjust the path as necessary

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
  },
  {
    videoSrc: Axe,
    title: "Axe",
    tag: "Beauty",
    linkTo: "/showreel/axe"
  },
  {
    videoSrc: Gillette,
    title: "Gillette",
    tag: "Beauty",
    linkTo: "/showreel/gillette"
  },
  {
    videoSrc: Celsius,
    title: "Celsius",
    tag: "Food/Beverage",
    linkTo: "/showreel/celsius"
  },
  {
    videoSrc: HighEndExotics,
    title: "High-End Exotics",
    tag: "Auto",
    linkTo: "/showreel/high-end-exotics"
  },
  {
    videoSrc: Thg,
    title: "The Hartford Group",
    tag: "Hospitality",
    linkTo: "/showreel/the-hartford-group"
  },
  {
    videoSrc: Umr,
    title: "United Mission Relief",
    tag: "NGO",
    linkTo: "/showreel/united-mission-relief"
  },
  {
    videoSrc: IntuitiveFoundation,
    title: "Intuitive Foundation",
    tag: "Retreat",
    linkTo: "/showreel/intuitive-foundation"
  },
  {
    videoSrc: EminentCollaborations,
    title: "Eminent Collaborations",
    tag: "NGO",
    linkTo: "/showreel/eminent-collaborations"
  },
  {
    videoSrc: ColombiaAirbnb,
    title: "El Silencio Glamping",
    tag: "Hospitality",
    linkTo: "/showreel/el-silencio-glamping"
  }
];

const VideosPage = () => {
  return (
    <Layout>
      <SEO title="Showreel" />
      <PageHeader title="Showreel"/>
      <VideoSlider slides={slidesData} />
    </Layout>
  );
};

export default VideosPage;
