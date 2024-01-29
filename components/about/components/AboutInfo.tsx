import useDeviceType from "@/hooks/shared/useDeviceType"
import Heading from "../../shared/Heading"
import AboutContact from "./AboutContact"

const AboutInfo = () => {
	const { isMobile } = useDeviceType()

	if (isMobile) {
		return (
			<div className="col-span-2">
				<Heading
					cls="items-center"
					sub="Hey There!"
					title="About Me"
				/>
				<p className="text-sm text-center pb-4">
					I am an enthusiastic and results-driven Full Stack Developer with expertise in NodeJS backend and React frontend technologies. Proficient in JavaScript and TypeScript, I have a proven track record of delivering high-quality, scalable solutions. I am adept at working with both relational and NoSQL databases, ensuring comprehensive data management. My commitment to staying current with industry trends and my passion for creating innovative solutions drive my continuous learning and
					professional growth.
				</p>
				<AboutContact />
			</div>
		)
	}

	return (
		<div className="col-span-1 py-8">
			<Heading
				cls="items-start"
				sub="Hey There!"
				title="About Me"
			/>
			<p className="text-base pb-4">
				I am an enthusiastic and results-driven Full Stack Developer with expertise in NodeJS backend and React frontend technologies. Proficient in JavaScript and TypeScript, I have a proven track record of delivering high-quality, scalable solutions. I am adept at working with both relational and NoSQL databases, ensuring comprehensive data management. My commitment to staying current with industry trends and my passion for creating innovative solutions drive my continuous learning and
				professional growth.
			</p>
			<AboutContact />
		</div>
	)
}

export default AboutInfo
