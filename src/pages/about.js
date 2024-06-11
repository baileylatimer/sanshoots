import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/page-header"
import TextCard from "../components/text-card"
import ContactBanner from "../components/contact-banner"
import AboutCard from "../components/about-card"
import PostProduction from "../videos/post-production.mp4"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader title="About"/>
    <div className="px-d ">
      <AboutCard cover={PostProduction} video={PostProduction}/>
    <h5 className="mt-12">About Sanshoots</h5>
    <h3 className="text-justify">One part left brain, one part right brain. One whole creative video agency.</h3></div>
    <div className="flex w-full justify-center">
    <StaticImage placeholder="blurred" src="../images/san-about.jpg" alt="Rocio Colomer Jorda • Dance" objectFit="cover" height="1200" width="2000" />
    </div>

    <ContactBanner link="/contact" title="Get in touch"/>
  </Layout>
)

export default AboutPage
