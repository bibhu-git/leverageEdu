import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Customers from './components/Customers'
import Programs from './components/Programs'
import LearningPath from './components/LearningPath'
import CareerPathway from './components/CareerPathway'
import OurPlatform from './components/OurPlatform'
import GlobalMobility from './components/GlobalMobility'
import SuccessStories from './components/SuccessStories'
import AIPlatform from './components/AIPlatform'
import FeaturedPublications from './components/FeaturedPublications'
import MediaCoverage from './components/MediaCoverage'
import PartnerSection from './components/PartnerSection'
import LeverageGuarantee from './components/LeverageGuarantee'
import FAQSection from './components/FAQSection'
import GlobalPresenceSection from './components/GlobalPresenceSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Customers/>
      <Programs/>
      <LearningPath/>
      <CareerPathway/>
      <OurPlatform/>
      <GlobalMobility/>
      <SuccessStories/>
      <AIPlatform/>
      <FeaturedPublications/>
      <MediaCoverage/>
      <PartnerSection/>
      <LeverageGuarantee/>
      <FAQSection/>
      <GlobalPresenceSection/>
      <Footer/>
    </div>
  )
}

export default App
