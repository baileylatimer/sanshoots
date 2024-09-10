import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import VideoSlider from '../components/video-slider';  // Adjust the path as necessary

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

import FrancisMercier from "../videos/francis-mercier.mp4";
import FrancisMercier2 from "../videos/francis-mercier.webm";
import FrancisMercier3 from "../images/francis-mercier.jpg";

import NourArdakani from "../videos/nour-ardakani.mp4";
import NourArdakani2 from "../videos/nour-ardakani.webm";
import NourArdakani3 from "../images/nour-ardakani.jpg";

import Bluemoon from "../videos/bluemoon.mp4";
import Bluemoon2 from "../videos/bluemoon.webm";
import Bluemoon3 from "../images/bluemoon.jpg";

import Axe from "../videos/axe.mp4";
import Axe2 from "../videos/axe.webm";
import Axe3 from "../images/axe.jpg";

import Gillette from "../videos/gillette.mp4";
import Gillette2 from "../videos/gillette.webm";
import Gillette3 from "../images/gillette.jpg";

import Celsius from "../videos/celsius.mp4";
import Celsius2 from "../videos/celsius.webm";
import Celsius3 from "../images/celsius.jpg";

import HighEndExotics from "../videos/highendexotics.mp4";
import HighEndExotics2 from "../videos/highendexotics.webm";
import HighEndExotics3 from "../images/high-end-exotics.jpg";

import Thg from "../videos/thehartfordgroup.mp4";
import Thg2 from "../videos/thehartfordgroup.webm";
import Thg3 from "../images/thg.jpg";

import Umr from "../videos/umr-relief.mp4";
import Umr2 from "../videos/umr-relief.webm";
import Umr3 from "../images/umr-relief.jpg";

import IntuitiveFoundation from "../videos/intuitive-foundation.mp4";
import IntuitiveFoundation2 from "../videos/intuitive-foundation.webm";
import IntuitiveFoundation3 from "../images/intuitive-foundation.jpg";

import EminentCollaborations from "../videos/eminent-collaborations.mp4";
import EminentCollaborations2 from "../videos/eminent-collaborations.webm";
import EminentCollaborations3 from "../images/eminent-collaborations.jpg";

import ColombiaAirbnb from "../videos/el-silencio-glamping.mp4";
import ColombiaAirbnb2 from "../videos/el-silencio-glamping.webm";
import ColombiaAirbnb3 from "../images/el-silencio-glamping.jpg";

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
    mp4Src: FrancisMercier,
    webmSrc: FrancisMercier2,
    fallbackImageSrc: FrancisMercier3,
    title: "Francis Mercier",
    tag: "Event",
    linkTo: "/showreel/francis-mercier"
  },

  {
    mp4Src: NourArdakani,
    webmSrc: NourArdakani2,
    fallbackImageSrc: NourArdakani3,
    title: "Nour Ardakani",
    tag: "Music Video",
    linkTo: "/showreel/nour-ardakani"
  },

  {
    mp4Src: Bluemoon,
    webmSrc: Bluemoon2,
    fallbackImageSrc: Bluemoon3,
    title: "Bluemoon",
    tag: "Jewelry",
    linkTo: "/showreel/bluemoon"
  },
  {
    mp4Src: Axe,
    webmSrc: Axe2,
    fallbackImageSrc: Axe3,
    title: "Axe",
    tag: "Beauty",
    linkTo: "/showreel/axe"
  },
  {
    mp4Src: Gillette,
    webmSrc: Gillette2,
    fallbackImageSrc: Gillette3,
    title: "Gillette",
    tag: "Beauty",
    linkTo: "/showreel/gillette"
  },
  {
    mp4Src: Celsius,
    webmSrc: Celsius2,
    fallbackImageSrc: Celsius3,
    title: "Celsius",
    tag: "Food/Beverage",
    linkTo: "/showreel/celsius"
  },
  {
    mp4Src: HighEndExotics,
    webmSrc: HighEndExotics2,
    fallbackImageSrc: HighEndExotics3,
    title: "High-End Exotics",
    tag: "Auto",
    linkTo: "/showreel/high-end-exotics"
  },
  {
    mp4Src: Thg,
    webmSrc: Thg2,
    fallbackImageSrc: Thg3,
    title: "The Hartford Group",
    tag: "Hospitality",
    linkTo: "/showreel/the-hartford-group"
  },
  {
    mp4Src: Umr,
    webmSrc: Umr2,
    fallbackImageSrc: Umr3,
    title: "United Mission Relief",
    tag: "NGO",
    linkTo: "/showreel/united-mission-relief"
  },
  {
    mp4Src: IntuitiveFoundation,
    webmSrc: IntuitiveFoundation2,
    fallbackImageSrc: IntuitiveFoundation3,
    title: "Intuitive Foundation",
    tag: "Retreat",
    linkTo: "/showreel/intuitive-foundation"
  },
  {
    mp4Src: EminentCollaborations,
    webmSrc: EminentCollaborations2,
    fallbackImageSrc: EminentCollaborations3,
    title: "Eminent Collaborations",
    tag: "NGO",
    linkTo: "/showreel/eminent-collaborations"
  },
  {
    mp4Src: ColombiaAirbnb,
    webmSrc: ColombiaAirbnb2,
    fallbackImageSrc: ColombiaAirbnb3,
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
