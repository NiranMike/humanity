import AboutSection from "@/components/AboutSection"
import Header from "@/components/Header"
import HeroCard from "@/components/HeroCard"
import HeroSection from "@/components/HeroSection"
import OurCause from "@/components/OurCause"
import HelpSection from "@/components/HelpSection"
import WhatWeDo from "@/components/WhatWeDo"
import WhatWeDid from "@/components/WhatWeDid"
import TestimonialSection from "@/components/TestimonialSection"


const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        {/* <HeroCard /> */}
        <AboutSection />
        <OurCause />
        <HelpSection />
        <WhatWeDo />
        <WhatWeDid />
        <TestimonialSection />
    </div>
  )
}

export default Home