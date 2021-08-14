import * as React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro/intro"
import Header from "../components/header/header"
import AboutMe from "../components/about/about"
import Services from "../components/services/services"
import Works from "../components/works/works"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
// markup
const IndexPage = () => {
  return <Layout>
      <title>Shivam's Portfolio</title>
    <Header></Header>
    <Intro></Intro>
    <AboutMe></AboutMe>
    <Services></Services>
    <Works></Works>
    <Contact></Contact>
    <Footer></Footer>
    
    </Layout>
}

export default IndexPage
