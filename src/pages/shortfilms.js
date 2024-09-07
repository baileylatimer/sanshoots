import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import VideoSlider from '../components/video-slider';  // Adjust the path as necessary

// Import video files directly
import Elyanna from "../videos/palestine-activated.mp4";
import YungBans from "../videos/palestine-will-be.mp4";
import FrancisMercier from "../videos/chaos-to-calm.mp4";
import NourArdakani from "../videos/tesla-cybertruck.mp4";

import Paliroots from "../videos/life-is-good.mp4";
import Bluemoon from "../videos/raceexotics-oc-meet.mp4";
import Axe from "../videos/forever-on-my-mind.mp4";
import Gillette from "../videos/breathe.mp4";
import Celsius from "../videos/ob-vibes.mp4";
import HighEndExotics from "../videos/glimpse-of-home.mp4";
import Thg from "../videos/die-one-day.mp4";
import Umr from "../videos/lost-in-mexico.mp4";
import IntuitiveFoundation from "../videos/each-moment-is-a-memory.mp4";
import EminentCollaborations from "../videos/embrace-your-jouney.mp4";
import ColombiaAirbnb from "../videos/never-let-you-fall.mp4";

// Sample data for the slider
const slidesData = [
  {
    videoSrc: Elyanna,
    title: "Palestine Activated",
    tag: "Cinematic",
    linkTo: "/shortfilms/palestine-activated"
  },
  {
    videoSrc: YungBans,
    title: "Palestine Will Be",
    tag: "Cinematic",
    linkTo: "/shortfilms/palestine-will-be"
  },
  {
    videoSrc: FrancisMercier,
    title: "Chaos to Calm",
    tag: "Shortfilm",
    linkTo: "/shortfilms/chaos-to-calm"
  },

  {
    videoSrc: NourArdakani,
    title: "Tesla Cybertruck",
    tag: "Auto",
    linkTo: "/shortfilms/tesla-cybertruck"
  },
  {
    videoSrc: Paliroots,
    title: "Life is Good",
    tag: "Cinematic",
    linkTo: "/shortfilms/life-is-good"
  },
  {
    videoSrc: Bluemoon,
    title: "Race Exotics OC Meet",
    tag: "Auto",
    linkTo: "/shortfilms/raceexotics-oc-meet"
  },
  {
    videoSrc: Axe,
    title: "Forever on My Mind",
    tag: "Travel",
    linkTo: "/shortfilms/forever-on-my-mind"
  },
  {
    videoSrc: Gillette,
    title: "Breathe",
    tag: "Cinematic",
    linkTo: "/shortfilms/breathe"
  },
  {
    videoSrc: Celsius,
    title: "OB Vibes",
    tag: "Storytelling",
    linkTo: "/shortfilms/ob-vibes"
  },
  {
    videoSrc: HighEndExotics,
    title: "Glimpse of Home",
    tag: "Travel",
    linkTo: "/shortfilms/glimpse-of-home"
  },
  {
    videoSrc: Thg,
    title: "Die One Day",
    tag: "Storytelling",
    linkTo: "/shortfilms/die-one-day"
  },
  {
    videoSrc: Umr,
    title: "Lost in Mexico",
    tag: "Travel",
    linkTo: "/shortfilms/lost-in-mexico"
  },
  {
    videoSrc: IntuitiveFoundation,
    title: "Each Moment is a Memory",
    tag: "Storytelling",
    linkTo: "/shortfilms/each-moment-is-a-memory"
  },
  {
    videoSrc: EminentCollaborations,
    title: "Embrace Your Journey",
    tag: "Storytelling",
    linkTo: "/shortfilms/embrace-your-journey"
  },
  {
    videoSrc: ColombiaAirbnb,
    title: "Never Let You Fall",
    tag: "Cinematic",
    linkTo: "/shortfilms/never-let-you-fall"
  }
];

const VideosPage = () => {
  return (
    <Layout>
      <SEO title="Shortfilms" />
      <PageHeader title="Shortfilms"/>
      <VideoSlider slides={slidesData} />
    </Layout>
  );
};

export default VideosPage;
