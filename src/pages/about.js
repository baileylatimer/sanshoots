import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/page-header"
import TextCard from "../components/text-card"
import ContactBanner from "../components/contact-banner"

import HeroVideo from "../videos/hero.mp4"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader title="About"/>
    <div className="flex w-full justify-center">
    <StaticImage placeholder="blurred" src="../images/ro-about.jpg" alt="Rocio Colomer Jorda • Dance" objectFit="cover" height="1200" width="2000" />
    </div>
    <div className="flex flex-col lg:flex-row">
      <TextCard text="STUDIO–RO is an award-winning dance practice working across a mix of disciplines that includes Heels & Hip hop."/>
      <TextCard text="Rocio Colomer Jorda has 15 years of dance experience. With influences from her home country of Spain, she now teaches in San Diego, CA."/>
    </div>
    <ContactBanner link="/contact" title="Get in touch"/>
  </Layout>
)

export default AboutPage
