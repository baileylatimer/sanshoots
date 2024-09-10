import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import VideoSlider from '../components/video-slider';  // Adjust the path as necessary

// Import video files directly
import PalestineActivated from "../videos/palestine-activated.mp4";
import PalestineActivated2 from "../videos/palestine-activated.webm";
import PalestineActivated3 from "../images/palestine-activated.jpg";

import PalestineWillBe from "../videos/palestine-will-be.mp4";
import PalestineWillBe2 from "../videos/palestine-will-be.webm";
import PalestineWillBe3 from "../images/palestine-will-be.jpg";

import ChaosToCalm from "../videos/chaos-to-calm.mp4";
import ChaosToCalm2 from "../videos/chaos-to-calm.webm";
import ChaosToCalm3 from "../images/chaos-to-calm.jpg";

import Cybertruck from "../videos/tesla-cybertruck.mp4";
import Cybertruck2 from "../videos/tesla-cybertruck.webm";
import Cybertruck3 from "../images/tesla-cybertruck.jpg";

import LifeIsGood from "../videos/life-is-good.mp4";
import LifeIsGood2 from "../videos/life-is-good.webm";
import LifeIsGood3 from "../images/life-is-good.jpg";

import RaceExotics from "../videos/raceexotics-oc-meet.mp4";
import RaceExotics2 from "../videos/raceexotics-oc-meet.webm";
import RaceExotics3 from "../images/raceexotics-oc-meet.jpg";

import ForeverOnMyMind from "../videos/forever-on-my-mind.mp4";
import ForeverOnMyMind2 from "../videos/forever-on-my-mind.webm";
import ForeverOnMyMind3 from "../images/forever-on-my-mind.jpg";

import Breathe from "../videos/breathe.mp4";
import Breathe2 from "../videos/breathe.webm";
import Breathe3 from "../images/breathe.jpg";

import ObVibes from "../videos/ob-vibes.mp4";
import ObVibes2 from "../videos/ob-vibes.webm";
import ObVibes3 from "../images/ob-vibes.jpg";

import GlimpseOfHome from "../videos/glimpse-of-home.mp4";
import GlimpseOfHome2 from "../videos/glimpse-of-home.webm";
import GlimpseOfHome3 from "../images/glimpse-of-home.jpg";

import DieOneDay from "../videos/die-one-day.mp4";
import DieOneDay2 from "../videos/die-one-day.webm";
import DieOneDay3 from "../images/die-one-day.jpg";

import LostInMexico from "../videos/lost-in-mexico.mp4";
import LostInMexico2 from "../videos/lost-in-mexico.webm";
import LostInMexico3 from "../images/lost-in-mexico.jpg";

import EachMoment from "../videos/each-moment-is-a-memory.mp4";
import EachMoment2 from "../videos/each-moment-is-a-memory.webm";
import EachMoment3 from "../images/each-moment-is-a-memory.jpg";

import EmbraceYourJourney from "../videos/embrace-your-journey.mp4";
import EmbraceYourJourney2 from "../videos/embrace-your-journey.webm";
import EmbraceYourJourney3 from "../images/embrace-your-journey.jpg";

import NeverLetYouFall from "../videos/never-let-you-fall.mp4";
import NeverLetYouFall2 from "../videos/never-let-you-fall.webm";
import NeverLetYouFall3 from "../images/never-let-you-fall.jpg";


// Sample data for the slider
const slidesData = [
  {
    mp4Src: PalestineActivated,
    webmSrc: PalestineActivated2,
    fallbackImageSrc: PalestineActivated3,
    title: "Palestine Activated",
    tag: "Cinematic",
    linkTo: "/shortfilms/palestine-activated"
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
    title: "Chaos to Calm",
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
  {
    mp4Src: LifeIsGood,
    webmSrc: LifeIsGood2,
    fallbackImageSrc: LifeIsGood3,
    title: "Life is Good",
    tag: "Cinematic",
    linkTo: "/shortfilms/life-is-good"
  },
  {
    mp4Src: RaceExotics,
    webmSrc: RaceExotics2,
    fallbackImageSrc: RaceExotics3,
    title: "Race Exotics OC Meet",
    tag: "Auto",
    linkTo: "/shortfilms/raceexotics-oc-meet"
  },
  {
    mp4Src: ForeverOnMyMind,
    webmSrc: ForeverOnMyMind2,
    fallbackImageSrc: ForeverOnMyMind3,
    title: "Forever on My Mind",
    tag: "Travel",
    linkTo: "/shortfilms/forever-on-my-mind"
  },
  {
    mp4Src: Breathe,
    webmSrc: Breathe2,
    fallbackImageSrc: Breathe3,
    title: "Breathe",
    tag: "Cinematic",
    linkTo: "/shortfilms/breathe"
  },
  {
    mp4Src: ObVibes,
    webmSrc: ObVibes2,
    fallbackImageSrc: ObVibes3,
    title: "OB Vibes",
    tag: "Storytelling",
    linkTo: "/shortfilms/ob-vibes"
  },
  {
    mp4Src: GlimpseOfHome,
    webmSrc: GlimpseOfHome2,
    fallbackImageSrc: GlimpseOfHome3,
    title: "Glimpse of Home",
    tag: "Travel",
    linkTo: "/shortfilms/glimpse-of-home"
  },
  {
    mp4Src: DieOneDay,
    webmSrc: DieOneDay2,
    fallbackImageSrc: DieOneDay3,
    title: "Die One Day",
    tag: "Storytelling",
    linkTo: "/shortfilms/die-one-day"
  },
  {
    mp4Src: LostInMexico,
    webmSrc: LostInMexico2,
    fallbackImageSrc: LostInMexico3,
    title: "Lost in Mexico",
    tag: "Travel",
    linkTo: "/shortfilms/lost-in-mexico"
  },
  {
    mp4Src: EachMoment,
    webmSrc: EachMoment2,
    fallbackImageSrc: EachMoment3,
    title: "Each Moment is a Memory",
    tag: "Storytelling",
    linkTo: "/shortfilms/each-moment-is-a-memory"
  },
  {
    mp4Src: EmbraceYourJourney,
    webmSrc: EmbraceYourJourney2,
    fallbackImageSrc: EmbraceYourJourney3,
    title: "Embrace Your Journey",
    tag: "Storytelling",
    linkTo: "/shortfilms/embrace-your-journey"
  },
  {
    mp4Src: NeverLetYouFall,
    webmSrc: NeverLetYouFall2,
    fallbackImageSrc: NeverLetYouFall3,
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
