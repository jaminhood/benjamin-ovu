import Section from "../shared/Section"
import { BannerBgOverlay } from "./components/BannerBgOverlay"
import { BannerInfo } from "./components/BannerInfo"

const Banner = ({ heading, tagline }: any) => {
	return (
		<Section cls="">
			<BannerBgOverlay />
			<div className="relative h-[30dvh] flex justify-center items-center flex-col">
				<BannerInfo
					heading={heading}
					tagline={tagline}
				/>
			</div>
		</Section>
	)
}

export { Banner }
