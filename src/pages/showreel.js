import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import VideoSlider from '../components/video-slider';  // Adjust the path as necessary

// Import video files directly
import Elyanna from "../videos/san-sand-1.mp4";
import NourArdakani from "../videos/san-sand-1.mp4";
import FrancisMercier from "../videos/san-sand-1.mp4";
import Paliroots from "../videos/san-sand-1.mp4";
import Bluemoon from "../videos/san-sand-1.mp4";
import Axe from "../videos/san-sand-1.mp4";

// Sample data for the slider
const slidesData = [
  {
    videoSrc: Elyanna,
    title: "Elyanna",
    tag: "Music",
    linkTo: "/first-video"
  },
  {
    videoSrc: NourArdakani,
    title: "Nour Ardakani",
    tag: "Music",
    linkTo: "/second-video"
  },
  {
    videoSrc: FrancisMercier,
    title: "Francis Mercier",
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
    tag: "Overview of the Second Video",
    linkTo: "/second-video"
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
