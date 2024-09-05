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
import Thg from "../videos/san-sand-1.mp4";
import Umr from "../videos/san-sand-1.mp4";
import IntuitiveFoundation from "../videos/san-sand-1.mp4";
import EminentCollaborations from "../videos/san-sand-1.mp4";
import ColombiaAirbnb from "../videos/san-sand-1.mp4";
import WaheebNasan from "../videos/san-sand-1.mp4";

// Sample data for the slider
const slidesData = [
  {
    videoSrc: Elyanna,
    title: "Elyanna",
    tag: "Event",
    linkTo: "/work/elyanna"
  },
  {
    videoSrc: YungBans,
    title: "Yung Bans",
    tag: "Music Video",
    linkTo: "/work/yung-bans"
  },
  {
    videoSrc: FrancisMercier,
    title: "Francis Mercier",
    tag: "Event",
    linkTo: "/work/francis-mercier"
  },

  {
    videoSrc: NourArdakani,
    title: "Nour Ardakani",
    tag: "Music Video",
    linkTo: "/work/nour-ardakani"
  },
  {
    videoSrc: Paliroots,
    title: "Paliroots",
    tag: "Apparel",
    linkTo: "/work/paliroots"
  },
  {
    videoSrc: Bluemoon,
    title: "Bluemoon",
    tag: "Jewelry",
    linkTo: "/work/bluemoon"
  },
  {
    videoSrc: Axe,
    title: "Axe",
    tag: "Beauty",
    linkTo: "/work/axe"
  },
  {
    videoSrc: Gillette,
    title: "Gillette",
    tag: "Beauty",
    linkTo: "/work/gillette"
  },
  {
    videoSrc: Celsius,
    title: "Celsius",
    tag: "Food/Beverage",
    linkTo: "/work/celsius"
  },
  {
    videoSrc: HighEndExotics,
    title: "High-End Exotics",
    tag: "Auto",
    linkTo: "/work/high-end-exotics"
  },
  {
    videoSrc: Thg,
    title: "THG (The Hartford Group)",
    tag: "Hospitality",
    linkTo: "/work/the-hartford-group"
  },
  {
    videoSrc: Umr,
    title: "UMR Relief",
    tag: "NGO",
    linkTo: "/work/umr-relief"
  },
  {
    videoSrc: IntuitiveFoundation,
    title: "Intuitive Foundation",
    tag: "Retreat",
    linkTo: "/work/intuitive-foundation"
  },
  {
    videoSrc: EminentCollaborations,
    title: "Eminent Collaborations",
    tag: "NGO",
    linkTo: "/work/eminent-collaborations"
  },
  {
    videoSrc: ColombiaAirbnb,
    title: "Colombia Airbnb",
    tag: "Hospitality",
    linkTo: "/work/columbia-airbnb"
  },
  {
    videoSrc: WaheebNasan,
    title: "Waheeb Nasan",
    tag: "Music",
    linkTo: "/work/waheeb-nasan"
  },
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
