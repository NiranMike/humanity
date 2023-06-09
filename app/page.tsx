import AboutSection from "@/components/AboutSection"
import Header from "@/components/Header"
import HeroCard from "@/components/HeroCard"
import HeroSection from "@/components/HeroSection"
import OurCause from "@/components/OurCause"
import HelpSection from "@/components/HelpSection"
import WhatWeDo from "@/components/WhatWeDo"
import WhatWeDid from "@/components/WhatWeDid"
import TestimonialSection from "@/components/TestimonialSection"
import VolunteerSection from "@/components/VolunteerSection"
import OurEvents from "@/components/OurEvents"
import NewsletterSection from "@/components/NewsletterSection"
import Footer from "@/components/Footer"



const Home = () => {
  return (
    <div>
        
        <HeroSection />
        {/* <HeroCard /> */}
        <AboutSection />
        <OurCause />
        <HelpSection />
        <WhatWeDo />
        <WhatWeDid />
        <TestimonialSection />
        <VolunteerSection />
        <OurEvents />
        <NewsletterSection />
      
    </div>
  )
}

export default Home