import * as React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro/intro"
import Header from "../components/header/header"
import AboutMe from "../components/about/about"
import Services from "../components/services/services"
import Works from "../components/works/works"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import Achievements from "../components/achievements/achievements"
// markup
const IndexPage = () => {
  return <Layout>
      <title>Shivam Dargan</title>
      <meta name="description" content="Interactive Resume Of Shivam Dargan, Undergraduate Student Of Thapar Institute Of Engineering And Technology"/>
    <Header></Header>
    <Intro></Intro>
    <AboutMe></AboutMe>
    <Achievements></Achievements>
    <Services></Services>
    <Works></Works>
    <Contact></Contact>
    <Footer></Footer>
    
    </Layout>
}

export default IndexPage
