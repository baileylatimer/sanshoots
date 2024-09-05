import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import VideoSlider from '../components/video-slider';  // Adjust the path as necessary

// Import video files directly
import Elyanna from "../videos/elyanna-2.mp4";
import YungBans from "../videos/yung-bans.mp4";
import NourArdakani from "../videos/production.mp4";
import FrancisMercier from "../videos/francis-mercier.mp4";
import Paliroots from "../videos/production.mp4";
import Bluemoon from "../videos/san-eye.mp4";
import Axe from "../videos/san-sand-1.mp4";
import Gillette from "../videos/san-sand-1.mp4";
import Celsius from "../videos/san-sand-1.mp4";
import HighEndExotics from "../videos/san-sand-1.mp4";
import Thg from "../videos/thehartfordgroup.mp4";
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
  },
  {
    videoSrc: Gillette,
    title: "Gillette",
    tag: "Beauty",
    linkTo: "/second-video"
  },
  {
    videoSrc: Celsius,
    title: "Celsius",
    tag: "Food/Beverage",
    linkTo: "/second-video"
  },
  {
    videoSrc: HighEndExotics,
    title: "High-End Exotics",
    tag: "Auto",
    linkTo: "/second-video"
  },
  {
    videoSrc: Thg,
    title: "The Hartford Group",
    tag: "Hospitality",
    linkTo: "/second-video"
  },
  {
    videoSrc: Umr,
    title: "UMR Relief",
    tag: "NGO",
    linkTo: "/second-video"
  },
  {
    videoSrc: IntuitiveFoundation,
    title: "Intuitive Foundation",
    tag: "Retreat",
    linkTo: "/second-video"
  },
  {
    videoSrc: EminentCollaborations,
    title: "Eminent Collaborations",
    tag: "NGO",
    linkTo: "/second-video"
  },
  {
    videoSrc: ColombiaAirbnb,
    title: "Colombia Airbnb",
    tag: "Hospitality",
    linkTo: "/second-video"
  },
  {
    videoSrc: WaheebNasan,
    title: "Waheeb Nasan",
    tag: "Music",
    linkTo: "/second-video"
  },
];

const ShortfilmsPage = () => {
  return (
    <Layout>
      <SEO title="Shortfimls" />
      <PageHeader title="Shortfilms"/>
      <VideoSlider slides={slidesData} />
    </Layout>
  );
};

export default ShortfilmsPage;
