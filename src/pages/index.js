import * as React from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Start from "../components/Start"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our favorite Destinations" />
    <Testimonials />
    <Start />
    <Email />
  </Layout>
)

export default IndexPage
