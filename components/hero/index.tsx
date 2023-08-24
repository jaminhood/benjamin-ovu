import Section from "../shared/Section"
import HeroAbout from "./HeroAbout"
import HeroBgOverlay from "./HeroBgOverlay"
import HeroInfo from "./HeroInfo"

const Hero = () => {
 return (
  <Section cls="">
   <HeroBgOverlay />
   <div className="relative h-[calc(70vh-6rem)] md:h-[calc(100vh-6rem)] flex justify-center items-center flex-col">
    <HeroInfo />
    <HeroAbout />
   </div>
  </Section>
 )
}

export default Hero
