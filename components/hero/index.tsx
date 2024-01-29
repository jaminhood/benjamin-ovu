import Section from "../shared/Section"
import HeroAbout from "./components/HeroAbout"
import HeroBgOverlay from "./components/HeroBgOverlay"
import HeroInfo from "./components/HeroInfo"

const Hero = () => {
	return (
		<Section cls="">
			<HeroBgOverlay />
			<div className="relative h-[50dvh] md:h-[calc(100vh-4rem)] flex justify-center items-center flex-col">
				<HeroInfo />
				<HeroAbout />
			</div>
		</Section>
	)
}

export default Hero
