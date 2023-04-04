import AboutSection from "@/components/AboutSection"
import Header from "@/components/Header"
import HeroCard from "@/components/HeroCard"
import HeroSection from "@/components/HeroSection"
import OurCause from "@/components/OurCause"
import HelpSection from "@/components/HelpSection"


const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        {/* <HeroCard /> */}
        <AboutSection />
        <OurCause />
        <HelpSection />
    </div>
  )
}

export default Home